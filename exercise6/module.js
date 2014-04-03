var fs = require('fs')

var filteredLS = function(dirPath, extenstion, callback) { 
    fs.readdir(dirPath, function(err, list) {
        if(err) {
            callback(err)
        } else {
            var matchedList = list.filter( function(element) {
                return (element.match('.'+ extenstion))
            })
	
	    callback(null,matchedList)
        }
    })
}
module.exports = filteredLS
