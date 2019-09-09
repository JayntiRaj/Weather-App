const request = require('request')

/*const url = 'https://api.darksky.net/forecast/838c6e8c740247afa67f06fd8cf3a003/37.8267,-122.4233?units=si'

request({url: url, json: true}, (error, response) => {
    if (error) {
        console.log("Unable to connect to weather service")
    } else if(response.body.error) {
        console.log('Unable to find location')
    } else {
        const currentTemp = response.body.currently.temperature
        const rain = response.body.currently.precipProbability
        const summary = response.body.daily.data[0].summary
        console.log(summary + ' It is currently ' + currentTemp + ' degrees out. There is a ' + rain + '% chance of rain.')
    }
    
})*/

const mapBoxUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Bangalore.json?access_token=pk.eyJ1IjoiamF5bnRpIiwiYSI6ImNrMGJud2s1bjAxMzEzbm5yOW5iNHM1OHAifQ.N6OQ2XUtHpBaIlbFklEEhg&limit=1"

request({url: mapBoxUrl, json: true}, (error, response) => {

    if(error) {
        console.log('Unable to connect to mapbox service')
    } else if(response.body.features.length === 0) {
        console.log('Unable to find location')
    } else {
        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]
        console.log('longitude: ' + longitude)
        console.log('latitude: ' + latitude)
    }
    
})