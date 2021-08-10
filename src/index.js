// requires
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ticketsJson = require('./tickets.json');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({ 'status': 'successful' });
});

// QUESTION 2 TODO
app.get('/sortedTickets', (req, res) => {
  console.log(ticketsJson);
  res.send(ticketsJson);
})

const listener = app.listen(8080, () => {
  console.log('listening on port: ' + listener.address().port)
})