const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 8090;

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'db',
  user: 'root',
  password: 'helloworld',
  database: 'recipes'
})

connection.connect()

connection.query('create table IF NOT EXISTS allRecipes(title VARCHAR(50))',(err, rows, fields) => {
  if (err) throw err

  console.log('and away')
})

router.use(function (req,res,next) {
console.log('/' + req.method);
next();
});

router.get('/', function(req,res){
res.sendFile(path + 'home.html');
});

router.get('/lasagna', function(req,res){
res.sendFile(path + 'lasagne.html');
});

router.get('/banana-bread', function(req,res){
res.sendFile(path + 'banana-bread.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
console.log('Nodejs Express Example App listening on port ' + port)
})


