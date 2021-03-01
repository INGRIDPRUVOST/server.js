const http = require('http');
const url = require('url');
const port = 8000;

const requestHandler = (request, response) => {
    const parsedUrl = url.parse(request.url, true)
    response.end(`hello ${parsedUrl.query.name} from ${parsedUrl.query.city}, ma grand mère en short`);
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if (err) {
        console.error('something bad happened');
    } else {
        console.log(`servor is listening on ${port}`);
    }
});