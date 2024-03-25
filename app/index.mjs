import express from 'express';
import os from 'os';
import { Client } from 'pg'
import process from 'process';

const app = express();
const PORT = 3000;
const PG_HOST = process.env.POSTGRESS_HOST;
const PG_USER = process.env.POSTGRESS_HOST;
const PG_PASSWORD = process.env.POSTGRESS_HOST;
const PG_DB = process.env.POSTGRESS_DB;

app.get('/', (req, res) => {
    const message = `v1.0 hello from ${os.hostname()}`;
    console.log(req.ip, message);
    res.send(message);
});

app.get('/time', (req, res) => {
    console.log(req.ip, message);
    const client = new Client({
        host: PG_HOST,
        database: PG_DB,
        user: PG_USER,
        password: PG_PASSWORD,
        port: 5432
    });
    client.connect().then(() => {
        client.query('NOW();', (err, res) => {
            if (err){
                console.log(`error: ${err}`);
                const time = err;
                return;
            } else {
                const time = res;
            }
            res.send(time)
            return;
        })
    })
    res.send('Error. Not connected to DB')
})

app.listen(PORT, () => {
    console.log(`server start at port ${PORT}`);
});