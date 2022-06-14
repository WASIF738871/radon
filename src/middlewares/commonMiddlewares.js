
const mid1= function ( req, res, next) {
    console.log("productDetail is created")
    next()
}

const mid2= function ( req, res, next) {
    const headerData = req.headers.isfreeappuser
    if(!headerData) return res.send("error ,missing mandatory header")
   
    next()
}

const mid3= function ( req, res, next) {
    const data = req.headers.isfreeappuser
    console.log(data)
    if(!data) return res.send("error ,missing mandatory header")

    next()
    
    
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
