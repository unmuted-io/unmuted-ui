import React, { Component } from "react"
import { Api, JsonRpc, JsSignatureProvider } from "eosjs"
import ScatterJS from '@scatterjs/core'
import ScatterEOS from '@scatterjs/eosjs2'

const network = ScatterJS.Network.fromJson({
  blockchain: "eos",
  protocol: "https",
  host: "api.eossweden.org",
  port: 443,
  chainId: "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"
})

export default class EOSIOClient extends Component {
  constructor(contractAccount) {
    super(contractAccount)
    this.contractAccount = contractAccount

    ScatterJS.plugins(new ScatterEOS())

    try {
      const rpc = new JsonRpc(network.fullhost())
      console.log('rpc is: ', rpc)
      ScatterJS.connect('YourAppName', { network }).then(connected => {
        if (!connected) return console.error('no scatter')

        this.eos = ScatterJS.eos(network, Api, { rpc })
        console.log('this.eos is: ', this.eos)
        ScatterJS.login().then(id => {
          if (!id) return console.error('no identity')
          this.account = ScatterJS.account('eos')
        })
      })
    } catch (error) {
      console.log(error)
    }
  }

  transaction = (data) => {
    const memo = JSON.stringify({
      c: data.input,
      u: data.username,
      z: 'dStream'
    })
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
              from: this.account.name,
              to: 'matthewedge1',
              quantity: `${data.amount} EOS`,
              memo
            }
          }
        ]
      },
      {
        blocksBehind: 3,
        expireSeconds: 30
      }
    ).then(res => {
        console.log('sent: ', res)
      }).catch(err => {
        console.error('error: ', err)
      })

  }
}