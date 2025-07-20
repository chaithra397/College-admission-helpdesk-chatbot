const express = require('express');
const cors = require('cors');
const getBotResponse = require('./responses');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.post('/chat', (req, res) => {
    const userInput = req.body.message;
    const botResponse = getBotResponse(userInput);
    res.json({ reply: botResponse });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
