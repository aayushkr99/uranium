let axios = require("axios")
// const { get } = require("../routes/route");



let getWeatherLondon = async function (req, res) {
    try {
        // let place = req.query.q
        // let userId = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=efc511b2aa9336fad7ba071fa0e4dd36`


        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }

    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



let getWeatherPlaces = async function (req, res) {
    try {
        let place = req.query.q
        let userId = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${userId}`


        }
        let result = await axios(options)
        console.log(result.data.main.temp)
        res.status(200).send({ msg: result.data.main.temp })
    }

    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getTempLondon = async function (req, res) {
    try {
        // let place = req.query.q
        // let userId = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=London&appid=efc511b2aa9336fad7ba071fa0e4dd36`


        }
        let result = await axios(options)
        console.log(result.data.main.temp)
        res.status(200).send({ msg: result.data.main.temp})
    }

    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}













let getSortedCities = async function(req,res){
    try{
        let cities = ["Bengaluru","Mumbai","Delhi","Kolkata","Chennai","London","Moscow"]
        let cityObjectArray = []
        for(let i = 0; i < cities.length ; i++){
            let obj = {city: cities[i]}
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=efc511b2aa9336fad7ba071fa0e4dd36`)
            console.log(resp.data.main.temp)

            obj.temp = resp.data.main.temp
            cityObjectArray.push(obj)
        }
        let sorted = cityObjectArray.sort(function(a,b){return a.temp - b.temp})
        console.log(sorted)
        res.status(200).send({status :true, data :sorted})
    }
    catch(error){
        console.log(error)
        res.status(500).send({status : false , msg :"server error"})
    }

}




let allMemes = async function (req, res) {
    try {
        // let place = req.query.q
        // let userId = req.query.appid
        let options = {
            method: "get",
            url: `https://api.imgflip.com/get_memes`


        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data})
    }

    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}




// const Memes = async function(req,res){
//     try{
//         let template=req.query.template_id;
//         let text0=req.query.text0;
//         let text1 = req.query.text1
        
//         let username = req.query.username
//         let password = req.query.password
        
//         let options = {
//             method : 'post',
//             url : `http://api.imgflip.com/caption_image/?template_id=${template}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
//         }

//     let result = await axios(options)
//     console.log(result.data)
//     res.status(200).send({status:true, msg : result.data})
//     }
//     catch(err){
//         console.log(err.message)
//         res.status(500).send({msg: err.message})
//     }
// }
const memes = async function(req,res){
    try{
        let id = req.query.template_id;
        let tex1 = req.query.text0
        let tex2 = req.query.text1
        let user = req.query.username
        let pass = req.query.password

        let options = {
            method : "post",
            url : `https://api.imgflip.com/caption_image?template_id=${id}&text0=${tex1}&text1=${tex2}&username=${user}&password=${pass}`
        }
        let result = await axios(options);
        res.status(200).send({msg : result.data, status : true})
    }
    catch(err){
        console.log(err)
        res.status(500).send({msg : err.message})
    }
}

let getMemesId = async function (req, res){
    try {
        let template_id=req.query.template_id;
        let text0=req.query.text0
        let text1=req.query.text1
        let username =req.query.username;
        let password =req.query.password;
        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(options);
        res.status(200).send({ msg: result.data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}











module.exports.getSortedCities = getSortedCities
module.exports.getWeatherLondon = getWeatherLondon
module.exports.getWeatherPlaces = getWeatherPlaces
module.exports.getTempLondon =getTempLondon
module.exports.allMemes = allMemes
module.exports.getMemesId = getMemesId
module.exports.memes = memes