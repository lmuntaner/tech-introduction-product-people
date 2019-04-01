const http = require('http');

const server = http.createServer(function (request, response) {
  const writers = ['Arturo Bandini', 'Henry Chinaski', 'Pierre Bezukhov', 'Sal Paradise'];
  if (request.url === '/writers') {
    response.write(writers.join(', '));
    response.end();
    return;
  }
  const urlItems = request.url.split('/');
  if (urlItems.length === 3 && urlItems[1] === 'writers') {
    const index = Number(urlItems[2]) - 1;
    response.write(writers[index]);
    response.end();
    return;
  }
  console.log(request.url.split('/'))
  response.write('hello world');
  response.end();
});

server.listen(8080, function() {
  console.log('Server listening on http://localhost:8080...');
});