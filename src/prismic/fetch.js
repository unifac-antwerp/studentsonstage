import { camelizeKeys } from "humps";
import apiEndpoint from "./config";
import Prismic from "prismic-javascript";

export default async function getData() {
  const api = await Prismic.getApi(apiEndpoint);
  const response = await api.query("", { pageSize: 10000 });

  const mapped = response.results.map(data => ({
    id: data.id.toLowerCase(),
    uid: data.uid,
    type: data.type,
    ...data
  }));
  return camelizeKeys(mapped);
}
