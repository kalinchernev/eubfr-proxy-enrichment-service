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

An ngrok proxy of the proxy:

```
curl --request GET \
  --url 'http://317c41c8.ngrok.io/service/data/EXR/A.BGN.EUR.SP00.A?detail=dataonly&endPeriod=2018&startPeriod=2018' \
  --header 'accept: '\''application/vnd.sdmx.data+json;version=1.0.0-wd'\'''
```

## Locations enrichment

Centroid enrichment example:

```
curl --request GET \
  --url 'https://europa.eu/webtools/rest/gisco/nominatim/reverse.php?lon=25.2865583&lat=54.6380366&format=json' \
  --header 'accept: application/vnd.sdmx.data+json;version=1.0.0-wd'
```

Country/NUTS enrichment example:

```
curl --request GET \
  --url 'http://europa.eu/webtools/rest/gisco/nuts/find-nuts.py?json=true&y=54.6380366&x=25.2865583' \
  --header 'accept: application/vnd.sdmx.data+json;version=1.0.0-wd'
```
