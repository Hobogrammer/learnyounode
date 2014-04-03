var bl = require('bl')
var http = require('http')

http.get(process.argv[2], function callback(response){
    response.pipe(bl(function(err,data){
        if (err) {
            callback(err)
        }
        else {
            console.log(data.toString().length)
            console.log(data.toString())
        }
    }))
})
