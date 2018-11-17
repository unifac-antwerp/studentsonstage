import { camelizeKeys } from 'humps'
import { getApi } from 'prismic-javascript'
import apiEndpoint from './config'

export default async function getData () {
  const api = await getApi(apiEndpoint)
  const response = await api.query('', { pageSize: 10000 })

  const mapped = response.results.map(data => ({
    id: data.id.toLowerCase(),
    uid: data.uid,
    type: data.type,
    ...data,
  }))
  return camelizeKeys(mapped)
}
