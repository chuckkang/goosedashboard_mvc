var mongoose = require("mongoose");

var GooseSchema = new mongoose.Schema({
	name: { type: String, required: true, minlength: 3 },
	color: { type: String, required: true, minlength: 3 },
	date: { type: Date, default: Date.now }
}, { timestamps: true });

mongoose.model('Goose', GooseSchema);
var Goose = mongoose.model('Goose');
