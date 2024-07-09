import axios from 'axios'

const httpRequest = async (query: Object) => {
  try {
    const headers = {
      'Content-Type': 'application/json'
    }

    const response = await axios.post('https://barber-shop-api-rbko.onrender.com/graphql', query, { headers })
    const { data, login } = response?.data

    if (login) {
      return login.token
    }

    return data
  }
  catch (error) {
    console.error('Error fetching data:', error);
  }
}

export default httpRequest
