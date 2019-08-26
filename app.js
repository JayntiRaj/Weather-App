const request = require('request')

const url = 'https://api.darksky.net/forecast/838c6e8c740247afa67f06fd8cf3a003/37.8267,-122.4233'

request({url: url}, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.currently)
})