var express = require('express'),
	app = express(),

	port = process.env.PORT || 3001,

	mongoose = require('mongoose'),

	stsData = require('./restapi/models/stsDataModel')

	bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/STS', {useMongoClient : true });

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./restapi/routes/dataroutes');
routes(app);

app.use ((req,res) => {
	res.status(404).send({url: req.origalUrl +' not found'})
});

app.listen(port);

console.log('STS server started on : '+ port);