# Examples

Few requests to copy-paste.

## Budget enrichment

ECB service is at `https://sdw-wsrest.ecb.europa.eu`

A direct request would be:

```
curl --request GET \
  --url 'https://sdw-wsrest.ecb.europa.eu/service/data/EXR/A.BGN.EUR.SP00.A?detail=dataonly&endPeriod=2018&startPeriod=2018' \
  --header 'accept: '\''application/vnd.sdmx.data+json;version=1.0.0-wd'\'''
```

A proxied request would be:

```
curl --request GET \
  --url 'http://localhost:3001/service/data/EXR/A.BGN.EUR.SP00.A?detail=dataonly&endPeriod=2018&startPeriod=2018' \
  --header 'accept: '\''application/vnd.sdmx.data+json;version=1.0.0-wd'\'''
```