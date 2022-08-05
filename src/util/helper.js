const today=new Date()
function printdate() {
   console.log(today)
}
function  printMonth() {
    console.log(today.getMonth())
}
function  getBatchInfo() {
    console.log("plutonium,W3D3,the topic for today is Nodejs module system")
}

module.exports.printdate =printdate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo