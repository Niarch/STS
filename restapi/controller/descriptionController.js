'use strict';

var mongoose = require('mongoose'),
descriptionCollection = mongoose.model('Output');

exports.finaldescription = (req,res)=>{
	descriptionCollection.find({}, (err, description) => {

    if (err) res.send(err);

    res.json(description);

  });

};