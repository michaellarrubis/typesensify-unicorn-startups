# Typesensify
- Perform a unicorn startup search with Typesense.

### Objective
- To build a web UI that has a search bar.

### Specification / Requirements
- When a search term is entered in the search bar, make API calls to Typesense to fetch the search results
- Display these results to the user, and then allow the user to filter on at least one attribute of the record.

### Dataset
- From https://www.kaggle.com/datasets/ramjasmaurya/unicorn-startups then loaded into mocky.io: https://run.mocky.io/v3/e64ebdef-e1a7-4ca8-99f6-ebb648ce9180

### Run in Development
- Node v18.17.0^ (Pre-requisite)
- After cloning, do the following
  - run: yarn install
  - run: cp env.sample .env
- Get your API_KEY first from Typesense Cloud and update your .env file
- run: yarn dev 
- open new tab or screen to execute the following commands in order (this setup is only once)
  - run: yarn start-typesense-server
    - will setup the server and is hosted on docker
  - run: yarn populate
    - it will pull the data from ready mocky.io json response api and build the schema
