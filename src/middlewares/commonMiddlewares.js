const headerCheck = async (req, res, next) => {
    const header = req.headers.isfreeappuser
    if(header){
        if(header === "true")
        req['isFreeAppUser'] = true
        if(header === "false")
        req['isFreeAppUser'] = false
    next()
    }
    else res.send({msg: "the request is missing a mandatory header"})
}

module.exports.headerCheck =headerCheck