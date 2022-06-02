const printDate = function(){
    const wasudev = new Date()
    console.log(wasudev);
   
}
const printMonth = function(){
    const wasudev = new Date()
    console.log(wasudev.getMonth());
}
const getBatchInfo = function(){
    const wasudev = new Date()
    console.log("radon W3D1 the topic for today is Nodejs module system")
}
module.exports.printDate = printDate
module.exports.printMonth = printMonth
module.exports.getBatchInfo = getBatchInfo
