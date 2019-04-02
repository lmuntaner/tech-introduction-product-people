const express = require('express');
const app = express();
const port = 3000;

const writers = ['Arturo Bandini', 'Henry Chinaski', 'Pierre Bezukhov', 'Sal Paradise'];

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/writers', (req, res) => {
  res.send(writers);
});

app.get('/writers/:writerId', (req, res) => {
  res.send(writers[req.params.writerId - 1]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))