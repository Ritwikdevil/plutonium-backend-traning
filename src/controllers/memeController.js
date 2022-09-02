let axios = require("axios")
//1
let createMeme= async function(req,res){
    try {
        let userName = req.query.userName
         let password = req.query.password
        let template_id=req.query.template_id
        let text1=req.query.text1
        let text2=req.query.text2

        let options={
            method:"post",
            url: `https://api.imgflip.com/caption_image?username=${userName}&password=${password}&template_id=${template_id}&text0=${text1}&text1=${text2}`
          
        }
        let result= await axios(options)
        res.status(200).send({msg :result.data})
        

} catch (error) {
    console.log(error)
        res.status(500).send({ status: false, msg: "server error" })
    
}

}




module.exports.createMeme=createMeme