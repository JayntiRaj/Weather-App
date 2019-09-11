const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

if(process.argv.length < 3) {
    return console.log('Please provide address')
}

geocode(process.argv[2], (error, data) => {

    if(error) {
        return console.log(error)
    }

    forecast(data.longitude, data.latitude, (error, forecastData) => {

        if(error) {
            return console.log(error)
        }

        console.log(data.location)
        console.log(forecastData)
    })
})

