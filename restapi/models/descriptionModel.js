var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var descriptionSchema = new Schema({
	location_name : String,
	description_text : String,
	approx_time : String,
	Latitude : Number,
	Longitude : Number
});

module.exports = mongoose.model('Output',descriptionSchema,'OutputDescription');
