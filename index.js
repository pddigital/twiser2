const express = require('express')
const {json} = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:5000'
}
const port = 5000;
const masterRoutes = require('./server/twiserRoutes')

const app = express();

mongoose.connect(MONGODB_URI);
// mongoose.connection.once(`open`, ()=> {
//   console.log(`Connected to mongo at ${mongoUri}`)
// })

app.use(json());

app.use(express.static(__dirname + '/public'));

app.use(cors(corsOptions));
masterRoutes(app);

app.listen(port, ()=> {
  console.log(`Express listening on ${port}`)
})
