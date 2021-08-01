var path = require('path'),
    express = require('express'),
    nopt = require('nopt'),
    bodyParser = require('body-parser');
    istanbulMiddleware = require('istanbul-middleware'),
    config = nopt({port: Number }),
    port = config.port || 8787;

var app = express();

console.log('Turning on coverage; ensure this is not production');
let serverPath = path.resolve(__dirname, '..', '..');
console.log(serverPath);
istanbulMiddleware.hookLoader(serverPath, { verbose: true });
console.log('Turn on coverage reporting at /coverage');
app.use('/coverage', istanbulMiddleware.createHandler({ verbose: true, resetOnGet: true }));

console.log('Starting coverage server at: http://localhost:' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.listen(port);
