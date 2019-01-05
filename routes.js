const fs = require('fs');

const requestHandler = (req, res) =>
{
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html><head><title>Welcome to my messages</title></head><body><form action="/message" method="POST"><input type="text" name="mes"><button type="submit">Send</button></form></body></html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            // console.log(chunk);
            body.push(chunk);
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            // console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message , (err) =>
            {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
            
        })
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html><head><title>Welcome to my page</title></head><body><h1>The author: Trần Quốc Trung</h1></body></html>');
    res.end();
}


// module.exports= requestHandler;

// module.exports = {
//     handler : requestHandler,
//     someText : 'Trần Quốc Trung', 
// }

module.exports.handler = requestHandler;
module.exports.someText = 'Trần Quốc Trung';