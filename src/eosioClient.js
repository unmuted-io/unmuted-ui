import React from "react"
import { Api, JsonRpc, JsSignatureProvider } from "eosjs"
import ScatterJS from "scatterjs-core"
import ScatterEOS from "scatterjs-plugin-eosjs2"

const endpoint = "https://eos.greymass.com"

const network = {
  blockchain: "eos",
  protocol: "http",
  host: "https://eos.greymass.com",
  port: 443,
  chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"
}

export default class EOSIOClient extends React.Component {
  constructor(contractAccount) {
    super(contractAccount)
    this.contractAccount = contractAccount

    ScatterJS.plugins(new ScatterEOS())

    try {
      ScatterJS.scatter.connect(this.contractAccount).then(connected => {
        if (!connected) return console.log("Issue Connecting")
        const scatter = ScatterJS.scatter
        const requiredFields = {
          accounts: [network] // We defined this above
        }
        scatter.getIdentity(requiredFields).then(() => {
          this.account = scatter.identity.accounts.find(
            x => x.blockchain === "eos"
          )
          const rpc = new JsonRpc(endpoint)
          console.log('eos being set')
          this.eos = scatter.eos(network, Api, { rpc })
        })
        window.ScatterJS = null // Don't forget to do this!

      })
    } catch (error) {
      console.log(error)
    }
  }

  transaction = (action, data) => {
    return this.eos.transact(
      {
        actions: [
          {
            account: 'eosio.token',
            name: 'transfer',
            authorization: [
              {
                actor: this.account.name, // our account name
                permission: 'active'
              }
            ],
            data: { // from, to, quantity, memo
              ...data,
              from: this.account.name,
              to: 'matthewedge1',
              quantity: '0.01 EOS',
              memo: 'This is my memo!'
            }
          }
        ]
      },
      {
        blocksBehind: 3,
        expireSeconds: 30
      }
    )
  }
}