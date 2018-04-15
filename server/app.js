const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to database
mongoose.connect('mongodb://imran:imran123@ds251827.mlab.com:51827/mongouploads');
mongoose.connection.once('open', () => {
  console.log('connected to mongoose db database');
});

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Now listening for requests on port 4000');
});