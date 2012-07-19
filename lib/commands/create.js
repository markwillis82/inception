var create = exports;
var methods = require("../methods");
var fs = require('fs');


create.inception = function(filename, cb) {
	var self = this;
	self.log.info("Incepting: "+filename);

	// Force encoding to ascii text
	fs.readFile(filename, 'ascii', function(err,data){
		if(err) {
			self.log.error("Could not open file: %s", err);
			process.exit(1);
		}
		methods.compile(data, function(err, encProg) {

			fs.writeFile(filename.replace(".js",".inception.js"), encProg, function(err) {
				if(err) {
					self.log.error(err);
				} else {
					self.log.info("The file was saved to: "+filename.replace(".js",".inception.js"));
				}
			});

		});
	});

};




