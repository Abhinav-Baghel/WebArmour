const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = 5500;
const upload = multer();

app.use(cors());
app.use(express.json());

app.post('/details', upload.none(), async (req, res) => {
    return res.status(200).send('Success!');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
