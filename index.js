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
const mongoUri = `mongodb://localhost:27017/twiser`;

mongoose.connect(mongoUri);
mongoose.connection.once(`open`, ()=> {
  console.log(`Connected to mongo at ${mongoUri}`)
})

app.use(json());

app.use(express.static(__dirname + '/public'));

app.use(cors(corsOptions));
masterRoutes(app);

app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
