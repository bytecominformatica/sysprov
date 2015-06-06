module.exports = function(app) {
    require('./login')(app)

    app.get('/teste', ensureAuthenticated, function(req, res){
      res.json({ message: "Authenticated" })
    });


    function ensureAuthenticated(req, res, next) {
      if (req.isAuthenticated()) { return next(); }
      res.redirect('/login.html')
    }
};