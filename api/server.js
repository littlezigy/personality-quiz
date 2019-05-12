console.log("Wow. So this works quite easily.");

var express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
var app = express();

app.use(bodyparser.json());
app.use(cors());

require('./routes')(app);

app.get('/', (req, res)=> {
	console.log("Bow chika bow wow!");
	res.send("Node JS Quiz app. Author: Adesuwa Tolu Dawodu");
});

app.listen(process.env.port || 1337, ()=> {
	console.log("We are live on port 1337");
});