const express = require('express');
const app = express()
const port = 3000;
const tts = require('./tts');

app.get('/', (req, res) => res.send('Disaster Assistant'));
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

app.listen(port, async () => {
    console.log(`Example app listening on port ${port}!`)
});
