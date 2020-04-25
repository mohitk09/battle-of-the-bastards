const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const app = express();
const listBattles = require('./routes/list-battles');
const countBattles = require('./routes/count-battles');
const searchBattles = require('./routes/search-battles');

const port = process.env.PORT || 5000;
require('dotenv').config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const uri = process.env.URL;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () =>{
  console.log('hurray connection setup');
}).catch((err)=>console.log('err', err));


app.use('/list', listBattles);
app.use('/count', countBattles);
app.use('/search', searchBattles);

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
