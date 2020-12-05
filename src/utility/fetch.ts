import axios from 'axios'
const { REACT_APP_API_BASE_URL } = process.env

export const getAxiosAuthorizedConfig = ({ endpoint, access_token }): object => ({
  url: `${REACT_APP_API_BASE_URL}/${endpoint}`,
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
})

export const getAxiosConfig = ({ endpoint }): object => ({
  url: `${REACT_APP_API_BASE_URL}/${endpoint}`,
})

export const getUserById = async (id: number) => {
  const userData = await axios({
    method: 'GET',
    url: `${REACT_APP_API_BASE_URL}/user/id/${id}`,
  })
  return userData
}
