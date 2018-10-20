const express = require('express');
const app = express()
const port = 3000;

app.get('/', (req, res) => res.send('Disaster Assistant'));
app.get('/checklist', (req, res) => {
    console.log('get checklist');
    }
);

app.get('/voice-command', (req, res) => {
        console.log('check voice command');
    }
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
