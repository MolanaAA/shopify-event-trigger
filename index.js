const express = require('express');

const app = express();

app.use(express.json());

app.post('/shopify-events', (req, res) => {
    console.log('🛎️ Event received:', req.body);
    res.sendStatus(200);
});

app.listen(5000, () => {
    console.log('🚀 Server is running on port 5000');
});