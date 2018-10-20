const fs = require('fs');
const http = require('http');
const path = require('path');

const express = require('express');
const logger = require('morgan');
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = require('./config');

const notificationRoute = require('./routes/notification.route');

const app = express();

const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    { flags: 'a' }
);
app.use(logger('combined', { stream: accessLogStream }));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/notifications', notificationRoute);

app.get('/', (req, res) => res.send('Disaster Assistant AP'));
app.get('/checklist', (req, res) => {
    console.log('get checklist');
    }
);

const server = http.createServer(app);
server.listen(config.port, () => console.log(`Server started on port: ${config.port}`));
