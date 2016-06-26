const express = require('express')
const {json} = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const port = 9000;
const masterRoutes = require('./server/twiserRoutes')
const corsOptions = {
  origin: 'http://localhost:9000'
}

const app = express();

mongoose.connect('mongodb://localhost:27017/twiser');

app.use(json());

app.use('/twiser', express.static(__dirname + '/public'));

app.use(cors(corsOptions));
masterRoutes(app);

app.listen(port, ()=> {
  console.log(`Express listening on ${port}`)
})
