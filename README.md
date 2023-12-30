# Typesensify
- Perform a unicorn startup search with Typesense.

### Objective
- To build a web UI that has a search bar.

### Specification / Requirements
- When a search term is entered in the search bar, make API calls to Typesense to fetch the search results
- Display these results to the user, and then allow the user to filter on at least one attribute of the record.

### Dataset
- https://www.kaggle.com/datasets/ramjasmaurya/unicorn-startups

### Run in Development
- Node v18.17.0 (Pre-requisite)
- After cloning, do the following
  - yarn install
  - cp env.sample .env
- Get your API_KEY first from Typesense Cloud and update your .env file
- run: yarn dev 
- run: yarn typesense-setup
  - yarn populate (pull the data and build the schema)
  - yarn start-typesense-server (will let the server run through docker)
