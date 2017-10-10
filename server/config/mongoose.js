var mongoose = require("mongoose");
var fs = require('fs');
var path = require("path")
mongoose.connect('mongodb://localhost/goosedashboard');
var models_path = path.join(__dirname, './models');
mongoose.Promise = global.Promise;

fs.readdirSync(models_path).forEach(function (file) {
	if (file.indexOf('.js') >= 0) {
		// require the file (this runs the model file which registers the schema)
		require(models_path + '/' + file);
	}
});