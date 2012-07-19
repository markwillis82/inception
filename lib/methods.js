var number = require("number-script");
var methods = exports;



exports.compile = function(program,callback) {
	compileNumber(program,callback);
};


var compileNumber = function(program, callback) {
	number.decompile(program,function(err, newData) {
		var finishedProgram = 'var number = require("number-script");var ctx = { require : function (name) { if (name === "number-script") { return number;} else {'+
				' return require(name); } }, console : console, process : process};var p = "'+newData+'";';

		finishedProgram += 'number.run(p, ctx, function (err) { if (err) console.error(err); console.log("done");});';

		callback(err, finishedProgram);
	});
};