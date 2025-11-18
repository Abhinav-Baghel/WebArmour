const express = require('express');
const cors = require('cors');
const { scanWebsite } = require('./scanner');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/scan', async (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).send({ error: 'URL is required' });
    }
    try {
        const report = await scanWebsite(url);
        return res.json(report);
    } catch (error) {
        console.error('Error during scanning:', error);
        return res.status(500).send({ error: 'Something went wrong' });
    }
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
