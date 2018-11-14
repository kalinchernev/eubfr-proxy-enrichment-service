# EUBFR Proxy Enrichment Service

During enrichment processes, sometimes a third party service could be down or experience difficulties. This service enables you to proxy a given service so that simulating such failures.

Having predictable failures on top of an actual service facilitates the development of fail-safe and more resilient sub-systems.

## Get dependencies

```sh
$ npm install
```

## Run the script

```sh
$ node index.js
```

or

```sh
$ npm start
```

## Configure settings

There is an example `.env` file (`.env.example`) where you can specify options. For instance:

```
# This proxies the budget enrichment service endpoint.
PORT=3001
SERVICE=https://sdw-wsrest.ecb.europa.eu
```
