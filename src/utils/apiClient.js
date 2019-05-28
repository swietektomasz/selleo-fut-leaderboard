const API_URL = process.env.REACT_APP_API_URL

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
