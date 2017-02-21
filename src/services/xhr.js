import axios from 'axios'

function handleResponse(res) {
  return Promise.resolve(res)
}

export default {
  get(url, params = {}) {
    return axios.get(url, { params })
    .then(handleResponse)
  }
}
