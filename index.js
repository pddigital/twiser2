const express = require('express')
const {json} = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:9000'
}
const port = 9000;
const masterRoutes = require('./server/twiserRoutes')

const app = express();
const mongoUri = `mongodb://heroku_5l344rtz:9umf8hib7basg24ts73223okkc@ds023704.mlab.com:23704/heroku_5l344rtz`;

mongoose.connect(mongoUri);
mongoose.connection.once(`open`, ()=> {
  console.log(`Connected to mongo at ${mongoUri}`)
})

app.use(json());

app.use(express.static(__dirname + '/public'));

app.use(cors(corsOptions));
masterRoutes(app);

app.listen(port, ()=> {
  console.log(`Express listening on ${port}`)
})
