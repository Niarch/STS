var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var inputSchema = new Schema({
	NumberOfDays : { type: Number, Required:  'Product name cannot be left blank.' },
	StartDate : {type: String, Required: 'A valid date'},
	StartTime : {type: String, Required: 'A valid time'},
	Budget : {type: Number, Required: 'show me the money'},
	Religious : {type: Number, Required: 'need default rating'},
	Historical : {type: Number, Required: 'need default rating'},
	Art : {type: Number, Required: 'need default rating'},
	Market : {type: Number, Required: 'need default rating'},
	Science : {type: Number, Required: 'need default rating'},
	Nature : {type: Number, Required: 'need default rating'},
});

module.exports = mongoose.model('UserInput', inputSchema);