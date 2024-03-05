const http = require('http');

const interval = 2000;

export function ReqTemp() {
    setInterval(() => {
        http.get('http://localhost:3000/temperature', (res: any) => {
            try {
                res.on('data', (data: any) => {
                    console.log('\n');
                    console.log('Comienzan los datos')
                    console.log('--------------------------------')
                    console.log('La temperatura es de: ' + JSON.parse(data).temperature + ' ºC');
                })
            } catch (e: any) {
                console.error("Error consiguiendo JSON: ", e)
            }
        })
    }, interval)
}

export function ReqPers() {
    setInterval(() => {
        http.get('http://localhost:3000/persianas', (res: any) => {
            try {
                res.on('data', (data: any) => {
                    console.log('\n');
                    console.log('Las persianas estan: ', JSON.parse(data).persianas);
                })
            } catch (e: any) {
                console.error("Error consiguiendo JSON: ", e)
            }
        })
    }, interval)
}

export function ReqLuz() {
    setInterval(() => {
        http.get('http://localhost:3000/luz', (res: any) => {
            try {
                res.on('data', (data: any) => {
                    console.log('\n');
                    console.log('El porcentaje de la luz es de: ', JSON.parse(data).luz + ' %');
                })
            } catch (e: any) {
                console.error("Error consiguiendo JSON: ", e)
            }
        })
    }, interval)
}

export function ReqRumba() {
    setInterval(() => {
        http.get('http://localhost:3000/rumba', (res: any) => {
            try {
                res.on('data', (data: any) => {
                    console.log('\n');
                    console.log('Las coordenadas del rumba son: ', JSON.parse(data).rumba);
                })
            } catch (e: any) {
                console.error("Error consiguiendo JSON: ", e)
            }
        })
    }, interval)
}