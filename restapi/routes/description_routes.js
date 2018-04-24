'use strict';
module.exports = (app)=> {

var controllerObject = require('../controller/descriptionController');

app.route('/').get(controllerObject.finaldescription);

};