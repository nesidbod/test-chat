import axios from 'axios'
const serviceUrl = process.env.REACT_APP_MM_API_URL

export const sendMes = (credentials: any) => {
  return axios
    .post(serviceUrl + '', credentials, {
       headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.data)
}