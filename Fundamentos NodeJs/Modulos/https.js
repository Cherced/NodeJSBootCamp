const htttp = require('http');

htttp.createServer(router).listen(3000);
function router(req, res) {
    console.log('request received');
    console.log('request url: ' + req.url);
    switch (req.url) {
        case '/hola':
            res.write("hola MUNDO");
            res.end();
            break;
    
        default:
            res.write("404 not found");
            res.end();
            break;
    }
    // res.writeHead(201, {'Content-Type': 'text/plain'});
    // res.write("hola ya se usar https de nodeJS");
    // res.end();
};

console.log('server running at http://3000/');