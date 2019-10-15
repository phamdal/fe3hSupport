var express = require('express'); 
var app = express(); 

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

var constants = require("./characterItems"); 
var abList = require("./adviceBox");
var lecList = require("./lectureAnswers"); 

app.get('/', function(req, res)
{
    res.send('Hello World!'); 
});

app.post('/adviceBox', function(req, res)
{
    let searchString = req.body.searchQuery; 
    searchString = searchString.toLowerCase(); 

    //to-do: do some validation: 
    let adviceList = abList.adviceBox;

    let finalList = []; 

    adviceList.forEach((x) => 
    {
        let question = x.question; 

        if(question.toLowerCase().includes(searchString))
        {
            finalList.push(x); 
        }
    }); 
    
    res.send(finalList); 
});

app.post('/lecture', function(req, res)
{
    let searchString = req.body.searchQuery;    
    searchString = searchString.toLowerCase(); 

    // to-do: do some validation: 
    let lectureList = lecList.lectureAnswers; 
    let finalList = []; 

    lectureList.forEach((x) => 
    {
        let question = x.question; 

        if(question.toLowerCase().includes(searchString))
        {
            finalList.push(x); 
        }
    }); 

    res.send(finalList); 
}); 

app.get('/alois', function(req, res)
{
    res.send(constants.Alois); 
}); 

app.get('/annette', function(req, res)
{
    res.send(constants.Annette); 
}); 

app.get('/ashe', function(req, res)
{
    res.send(constants.Ashe); 
}); 

app.get('/bernadetta', function(req, res)
{
    res.send(constants.Bernadetta); 
}); 

app.get('/casper', function(req, res)
{
    res.send(constants.Casper); 
}); 

app.get('/catherine', function(req, res)
{
    res.send(constants.Catherine); 
}); 

app.get('/claude', function(req, res)
{
    res.send(constants.Claude); 
}); 

app.get('/cyrill', function(req, res)
{
    res.send(constants.Cyril); 
}); 

app.get('/dedue', function(req, res)
{
    res.send(constants.Dedue); 
}); 

app.get('/dimitri', function(req, res)
{
    res.send(constants.Dimitri); 
}); 

app.get('/dorothea', function(req, res)
{
    res.send(constants.Dorothea); 
}); 

app.get('/edelgard', function(req, res)
{
    res.send(constants.Edelgard); 
}); 

app.get('/felix', function(req, res)
{
    res.send(constants.Felix); 
}); 

app.get('/ferdinand', function(req, res)
{
    res.send(constants.Ferdinand); 
}); 

app.get('/flayn', function(req, res)
{
    res.send(constants.Flayn); 
}); 

app.get('/gilbert', function(req, res)
{
    res.send(constants.Gilbert); 
}); 

app.get('/hanneman', function(req, res)
{
    res.send(constants.Hanneman); 
}); 

app.get('/hilda', function(req, res)
{
    res.send(constants.Hilda); 
}); 

app.get('/hubert', function(req, res)
{
    res.send(constants.Hubert); 
}); 

app.get('/ignatz', function(req, res)
{
    res.send(constants.Ignatz); 
}); 

app.get('/ingrid', function(req, res)
{
    res.send(constants.Ingrid); 
}); 

app.get('/leonie', function(req, res)
{
    res.send(constants.Leonie); 
}); 

app.get('/linhardt', function(req, res)
{
    res.send(constants.Linhardt); 
}); 

app.get('/lorenz', function(req, res)
{
    res.send(constants.Lorenz); 
}); 

app.get('/lysithea', function(req, res)
{
    res.send(constants.Lysithea); 
}); 

app.get('/manuela', function(req, res)
{
    res.send(constants.Manuela); 
}); 

app.get('/marianne', function(req, res)
{
    res.send(constants.Marianne); 
}); 

app.get('/mercedes', function(req, res)
{
    res.send(constants.Mercedes); 
}); 

app.get('/petra', function(req, res)
{
    res.send(constants.Petra) 
}); 

app.get('/raphael', function(req, res)
{
    res.send(constants.Raphael); 
}); 

app.get('/rhea', function(req, res)
{
    res.send(constants.Rhea); 
}); 

app.get('/seteth', function(req, res)
{
    res.send(constants.Seteth); 
}); 

app.get('/shamir', function(req, res)
{
    res.send(constants.Shamir); 
}); 

app.get('/sylvain', function(req, res)
{
    res.send(constants.Sylvain); 
}); 

var server = app.listen(3000, function()
{

}); 