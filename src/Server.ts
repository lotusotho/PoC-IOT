import { Request, Response } from 'express';
import { DeviceData } from './DeviceData';

const express = require('express');

const bodyParse = require('body-parser');

const app = express();
app.use(bodyParse.json());

export const storeData = new DeviceData(0, 0, 0, [0, 0]);

export function Server() {
    // Request POST

    app.post('/temperatura', (req: Request, res: Response) => {
        const temperatura = req.body.temperatura;

        storeData.temperatura = temperatura;

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

    app.get('/temperatura', (req: any, res: any) => {
        res.json({ temperatura: storeData.temperatura });
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