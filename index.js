const express = require('express')
const {json} = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const port = 9000;
const mongoUri = 'mongodb://localhost:27017/twiser';
const masterRoutes = require('./server/twiserRoutes')
const corsOptions = {
  origin: 'http://localhost:9000'
}

mongoose.connection.once(`open`, ()=> {
  console.log(`Connected to mongo at ${mongoUri}`)
})

mongoose.connect(mongoUri);

const app = express();


app.use(json());

app.use('/twiser', express.static(__dirname + '/public'));
app.use(cors(corsOptions));

masterRoutes(app);
app.listen(port, 'localhost', ()=> {
  console.log(`Express listening on ${port}`)
})
