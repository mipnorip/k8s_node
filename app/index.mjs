import express from 'express';
import os from 'os';
import pg from 'pg';
const Client = pg.Client
import process from 'process';

const app = express();
const PORT = 3000;
const PG_HOST = process.env.POSTGRES_HOST;
const PG_USER = process.env.POSTGRES_USER;
const PG_PASSWORD = process.env.POSTGRES_PASSWORD;
const PG_DB = process.env.POSTGRES_DB;

app.get('/', (req, res) => {
    const message = `v1.0 hello from ${os.hostname()}`;
    console.log(req.ip, message);
    res.send(message);
});

app.get('/time', (req, res) => {
    console.log(req.ip);
    const client = new Client({
        host: PG_HOST,
        database: PG_DB,
        user: PG_USER,
        password: PG_PASSWORD,
        port: 5432
    });
    client.connect()
    .then(() => {
        client.query('SELECT NOW();').then((response) => {
            const time = response.rows.pop().now;
            res.send(`pg time is ${time}`);
        })
    })
    .catch((err) => {
        res.send(`Error. Not connected to DB<br/>${err}`);
    })
    
    return;
})

app.listen(PORT, () => {
    console.log(`server start at port ${PORT}`);
});