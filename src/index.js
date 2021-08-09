// requires
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('GET REQUEST');
});

const listener = app.listen(8080, () => {
  console.log('listening on port: ' + listener.address().port)
})