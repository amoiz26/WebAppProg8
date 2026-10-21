
const http = require('http');

const hostname = process.env.hostname || '127.0.0.1';
const port = process.env.port || 3001;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.write('<!DOCTYPE html>');
    res.write('<html>');
    res.write('<head>');
    res.write('<title>Cities I Would Like to Visit</title>');
    res.write('</head>');
    res.write('<body>');

    res.write('<h1>Cities I Would Like to Visit</h1>');
    res.write('<p>The following are four cities that I have not visited yet but would like to visit in the future.</p>');

    res.write('<table border="1" cellpadding="8" cellspacing="0">');
    res.write('<tr><th>City</th><th>Reason to Visit</th><th>Distance from Kansas City</th><th>Estimated Travel Cost</th></tr>');

    res.write('<tr><td>New York City</td><td>To see Times Square and famous attractions</td><td>About 1,200 miles</td><td>$400</td></tr>');
    res.write('<tr><td>Los Angeles</td><td>To see Hollywood and the beaches</td><td>About 1,600 miles</td><td>$450</td></tr>');
    res.write('<tr><td>Miami</td><td>To enjoy the beaches and warm weather</td><td>About 1,400 miles</td><td>$450</td></tr>');
    res.write('<tr><td>Seattle</td><td>To explore the city and see the Space Needle</td><td>About 1,800 miles</td><td>$500</td></tr>');

    res.write('</table>');
    res.end('</body></html>');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
