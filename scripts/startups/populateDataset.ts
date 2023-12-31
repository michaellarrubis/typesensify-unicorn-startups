require("dotenv").config()
const Typesense = require('typesense')
const axios = require('axios')

module.exports = (async () => {
  const TYPESENSE_CONFIG = {
    nodes: [
      {
        host: process.env.TYPESENSE_HOST,
        port: process.env.TYPESENSE_PORT,
        protocol: process.env.TYPESENSE_PROTOCOL,
      },
    ],
    apiKey: process.env.TYPESENSE_API_KEY,
  }

  const typesense = new Typesense.Client(TYPESENSE_CONFIG)

  const schema = {
    name: 'startups',
    num_documents: 0,
    fields: [
      {
        "facet": true,
        "index": true,
        "name": "company",
        "type": "string"
      },
      {
        "facet": true,
        "index": true,
        "name": "valuation",
        "type": "float"
      },
      {
        "facet": true,
        "index": true,
        "name": "date_joined",
        "type": "string"
      },
      {
        "facet": true,
        "index": true,
        "name": "country",
        "type": "string"
      },
      {
        "facet": true,
        "index": true,
        "name": "city",
        "type": "string"
      },
      {
        "facet": true,
        "index": true,
        "name": "industry",
        "type": "string"
      },
      {
        "facet": true,
        "index": true,
        "name": "investors",
        "type": "string"
      }
    ],
  }

  const { data } = await axios.get(`${process.env.API_URL}/startups`)
  const startups = !!data.length ? data : []

  await typesense.collections().create(schema)
  console.log('Creating schema...')

  try {
    const returnData = await typesense
      .collections('startups')
      .documents()
      .import(startups)
  } catch (err) {
    console.error(err)
  }
})()