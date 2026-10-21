
const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3001;

const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${hostname}:${port}`);

    // Serve the HTML webpage
    if (req.method === 'GET' && url.pathname === '/') {
        fs.readFile(path.join(__dirname, 'fetchdemo.html'), (err, data) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Unable to load webpage');
                return;
            }

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
        return;
    }

    // Compute the math results
    if (req.method === 'GET' && url.pathname === '/compute') {
        const x = Number(url.searchParams.get('x'));
        const y = Number(url.searchParams.get('y'));

        console.log(`Computing x=${x}, y=${y}`);

        if (!Number.isFinite(x) || !Number.isFinite(y)) {
            res.writeHead(400, {'Content-Type': 'text/plain'});
            res.end('Invalid numbers');
            return;
        }

        const resultX = Math.atan(x);
        const resultY = Math.atan(y);

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(`Math.atan(${x}) is ${resultX} and Math.atan(${y}) is ${resultY}`);
        return;
    }

    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
