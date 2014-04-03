var fs = require('fs')

fs.readdir(process.argv[2],function(err, list) {
	extenstion = process.argv[3]
	
	matchedList = list.filter( function(element) {
		return element.match('.'+ extenstion)
	})

	var i
	
	for(i=0; i < matchedList.length; i++) {
		console.log(matchedList[i])
	}
})
