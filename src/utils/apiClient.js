// const API_URL = 'https://shrouded-dawn-25675.herokuapp.com'
const API_URL = 'http://localhost:3001'

const _handleResponse = response =>
  response.text().then(text => {
    const json = text ? JSON.parse(text) : {}

    if (!response.ok) {
      const error = {
        ...json,
        status: response.status,
        statusText: response.statusText,
      }

      return Promise.reject(error)
    }

    return json
  })

export default async (url, options) =>
  await fetch(`${API_URL}/${url}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  }).then(_handleResponse)
