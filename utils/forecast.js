const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/838c6e8c740247afa67f06fd8cf3a003/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si'

    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to weather services', undefined)
        } else if(response.body.error) {
            callback('Unable to find weather. Enter valid latitude and logitude', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast