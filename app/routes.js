module.exports = function(app) {

	app.get('/api/todos', function(req, res) {
		res.end('teste')
	});

	app.post('/', function(req, res) {
    		res.render('/index.html')
    });

};