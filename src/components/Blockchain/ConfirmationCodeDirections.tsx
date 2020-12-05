import React, { ReactElement } from 'react'
import { Button } from 'reactstrap'

interface Props {
  telosAccountName: string
  code: string
  ual: any
}

function ConfirmationCodeDirections({ telosAccountName, code, ual }: Props): ReactElement {
  const confirmationTransaction = {
    actions: [
      {
        account: 'eosio.token',
        name: 'transfer',
        authorization: [
          {
            actor: telosAccountName, // use account that was logged in
            permission: 'active',
          },
        ],
        data: {
          from: telosAccountName, // use account that was logged in
          to: 'unmutediodap',
          quantity: '0.0001 TLOS',
          memo: code,
        },
      },
    ],
  }

  const sendTransaction = async () => {
    try {
      await ual.activeUser.signTransaction(confirmationTransaction, { broadcast: true })
    } catch (error) {}
  }

  return (
    <div>
      Pleas send .0001 to unmutediodap from your &apos;{telosAccountName}&apos; account with the following memo field:
      <br />
      {code}
      <Button onClick={sendTransaction}>Send</Button>
    </div>
  )
}

export default ConfirmationCodeDirections
