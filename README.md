# FOSS4G-2017-Demo
## Installation
1. Install Claudia JS: https://claudiajs.com/tutorials/installing.html
2. `npm i`

## Plugins Installed
- Google Sheets Provider
- GeoServices Output
- Vector Tiles Output
- WFS Output

## Local Development
- Comment out the `module.exports` line in server.js and replace with `koop.server.listen(1337)`

## Environment Variables
- `GOOGLESHEETS_AUTH`: Get from the Google Cloud Console. Must be set for Google Sheets provider to function

## Deployment
- `./create.sh`: creates new lambda function and api gateway 
- `./update.sh`: updates the lamda function
