import express from 'express';
import cors from 'cors';
import { readFile } from 'node:fs';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
    readFile('./m3u/5_Guovin_iptv/result.m3u', (err, data) => {
        if (err) throw err;
        //console.log(data.toString());
        res.set({ 'content-type': 'text/plain' });
        res.status(200).send(data.toString());
    });
});

app.listen(80, () => {
    console.log("Starting...");
});
