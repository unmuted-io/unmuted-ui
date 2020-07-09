const { REACT_APP_API_BASE_URL } = process.env

export const getAxiosAuthorizedConfig = ({ endpoint, access_token }): object => ({
  url: `${REACT_APP_API_BASE_URL}/${endpoint}`,
  headers: {
    Authorization: `Bearer ${access_token}`
  }
})

export const getAxiosConfig = ({ endpoint }): object => ({
  url: `${REACT_APP_API_BASE_URL}/${endpoint}`
})
