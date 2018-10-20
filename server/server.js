const fs = require('fs');
const http = require('http');
const path = require('path');

const express = require('express');
const logger = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config');
const tts = require('./tts');

const app = express();
app.set('port', config.port);

const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    { flags: 'a' }
);
app.use(logger('combined', { stream: accessLogStream }));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    return next();
});


app.get('/', (req, res) => res.send('Disaster Assistant AP'));
app.get('/checklist', (req, res) => {
    console.log('get checklist');
    }
);

app.get('/voice-command', async (req, res) => {
        console.log('check voice command');
        let request = 'show list';
        let generated = await tts.generateSpeach(request);
        res.send(generated);
    }
);

http.createServer(app)
    .listen(config.port,
        () => console.log(`Server started on port: ${config.port}`)
    );

module.exports = app;
