//////  ROUTES
var goose_controller = require('./controllers/goose_controller.js');


module.exports = function Route(app){
app.get("/", function(req, res){
	goose_controller.show(req, res)
})

app.get("/edit/:id", function (req, res){
	goose_controller.edit(req, res);
})

app.get('/delete/:id', function (req, res){
	goose_controller.delete(req, res);
})
app.post("/:id", function(req, res){
	goose_controller.add(req, res);
})
app.get("/goosedetail/:id", function(req, res){
goose_controller.view(req, res);
})
//////////////////////////////////////////////
}