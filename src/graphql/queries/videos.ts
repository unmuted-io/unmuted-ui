import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

export const FETCH_USERS = gql`
  {
    fetchUser(id: 2) {
      id
      username
      edge_username
    }
  }
`
