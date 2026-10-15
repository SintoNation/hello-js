const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        res.writeHead(200, {'Content-Type' : 'text/plain'});
        res.end('Hello from Raw Node.js!');
    } else {
        res.writeHead(404, {'Content-Type' : 'text/plain'});
        res.end('Not Found!');
    }
});

const Port = 3000;
server.listen(Port, () => {
    console.log('Raw server running on http://localhost:${PORT}');
})