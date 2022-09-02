let axios = require("axios")
//1
const getWeatherDetails = async function (req, res) {
    try {
        let city = req.query.city
        let AppId = req.query.AppId
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${AppId}`
        }
        let result = await axios(options)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        res.status(500).send({ msg: err.message })
    }
}
//2
const getCityTemprature = async function (req, res) {
    try {
        let city = req.query.city
        let AppId = req.query.AppId
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${AppId}`
        }
        let result = await axios(options)
        let temprature= result.data.main.temp 
        res.status(200).send({ msg: temprature })
    }
    catch (err) {
      res.status(500).send({ msg: err.message })
    }
}
//3
const SortTheCities = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let newCityArray = []

        for (i = 0; i < cities.length; i++) {

            let obj = { city: cities[i] }
            let result= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=0a8d883366567bee7c419f9d2d5be9b1`)

            console.log(result.data.main.temp)
            obj.temp = result.data.main.temp  
            newCityArray.push(obj)
        }
        let sortedTemp = newCityArray.sort(function (a, b) { return a.temp - b.temp })
        console.log(sortedTemp)
        res.status(200).send({ status: true, data: sortedTemp })
    }

    catch (error) {
        console.log(error)
        res.status(500).send({ status: false, msg: "server error" })
    }
}



module.exports.getWeatherDetails=getWeatherDetails
module.exports.getCityTemprature=getCityTemprature
module.exports.SortTheCities=SortTheCities
