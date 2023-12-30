require("dotenv").config()
import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter"

let TYPESENSE_SERVER_CONFIG = {
  apiKey: process.env.TYPESENSE_API_KEY!,
  nodes: [
    {
      host: process.env.TYPESENSE_HOST,
      port: process.env.TYPESENSE_PORT,
      protocol: process.env.TYPESENSE_PROTOCOL,
    },
  ],
  connectionTimeoutSeconds: 1,
  numRetries: 8,
}

export const typesenseAdapter = new TypesenseInstantsearchAdapter({
  // @ts-ignore
  server: TYPESENSE_SERVER_CONFIG,
  additionalSearchParameters: {
    query_by: "company,date_joined,country,city,industry,investors",
    query_by_weights: "1,1,4,2,4,4",
    num_typos: 3,
    typo_tokens_threshold: 1,
  },
})

export const searchClient = typesenseAdapter.searchClient
