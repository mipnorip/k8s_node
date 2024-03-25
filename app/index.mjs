import express from 'express';
import os from 'os';

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    const message = `v1.0 hello from ${os.hostname()}`;
    console.log(req.ip, message);
    res.send(message);
});

app.listen(PORT, () => {
    console.log(`server start at port ${PORT}`);
});