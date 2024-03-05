import { Request, Response } from 'express';

const express = require('express');

const bodyParse = require('body-parser');

const app = express();
app.use(bodyParse.json());

export let storeData = {
    temperature: 0.0,
    persianas: 0.0,
    luz: 0.0,
    rumba: [0, 0]
};

export function Server() {
    // Request POST

    app.post('/temperature', (req: Request, res: Response) => {
        const temperature = req.body.temperature;

        storeData.temperature = temperature;

        res.sendStatus(200);
    })

    app.post('/persianas', (req: Request, res: Response) => {
        const persianas = req.body.persianas;

        storeData.persianas = persianas;

        res.sendStatus(200);
    })

    app.post('/luz', (req: Request, res: Response) => {
        const luz = req.body.luz;

        storeData.luz = luz;

        res.sendStatus(200);
    })

    app.post('/rumba', (req: Request, res: Response) => {
        const rumba = req.body.rumba;

        storeData.rumba = rumba;

        res.sendStatus(200);
    })

    // Request GET

    app.get('/temperature', (req: any, res: any) => {
        res.json({ temperature: storeData.temperature });
    })

    app.get('/persianas', (req: any, res: any) => {
        res.json({ persianas: storeData.persianas });
    })

    app.get('/luz', (req: any, res: any) => {
        res.json({ luz: storeData.luz });
    })

    app.get('/rumba', (req: any, res: any) => {
        res.json({ rumba: storeData.rumba });
    })

    app.listen(3000, () => {
        console.log("El server está escuchando en el puerto 3000")
    })
}