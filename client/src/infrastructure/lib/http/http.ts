import { apiUrl } from 'infrastructure/config'

const baseURL = apiUrl

const headers = {
  'Content-Type': 'application/json'
}

const get = async <T> (url: string, baseUrl: boolean = false): Promise<T> => {
  let path = `${baseURL}/${url}`
  if (baseUrl) path = url

  const response = await fetch(path, {
    method: 'GET',
    headers
  })
  return await response.json() as T
}

const post = async <T> (url: string, body: any, baseUrl: boolean = false): Promise<T> => {
  let path = `${baseURL}/${url}`
  if (baseUrl) path = url

  const response = await fetch(path, {
    method: 'POST',
    headers,
    body: JSON.stringify(body)
  })
  return await response.json() as T
}

const put = async <T> (url: string, body: any, baseUrl: boolean = false): Promise<T> => {
  let path = `${baseURL}/${url}`
  if (baseUrl) path = url

  const response = await fetch(path, {
    method: 'PUT',
    headers,
    body
  })
  return await response.json() as T
}

const _delete = async <T> (url: string, baseUrl: boolean = false): Promise<T> => {
  let path = `${baseURL}/${url}`
  if (baseUrl) path = url

  const response = await fetch(path, {
    method: 'DELETE',
    headers
  })
  return await response.json() as T
}

const http = {
  get,
  post,
  put,
  delete: _delete
}

export default http
