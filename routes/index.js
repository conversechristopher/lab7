var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(request, response){
	projects['viewAlt'] = false;
	console.log("view");
  	response.render('index', projects);
};

exports.viewAlt = function(request, response) {
	projects['viewAlt'] = true;
	console.log("viewAlt");
	response.render('index', projects);
}