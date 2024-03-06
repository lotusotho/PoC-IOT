import chalk from "chalk";

export const ReqTemp = async() => {
    await fetch('http://localhost:3000/temperatura')
        .then(resp => resp.json())
        .then((data: any) => {
                console.log('La temperatura es de: ' + chalk.bgRedBright(data.temperatura + ' ºC'));
        })
        .catch(error => console.log('Ha habido un error: ' + error))
}

export const ReqPers = async() => {
    await fetch('http://localhost:3000/persianas')
        .then(resp => resp.json())
        .then((data: any) => {
                console.log('Las persianas estan en modo: ' + chalk.bgGreenBright(data.persianas));
        })
        .catch(error => console.log('Ha habido un error: ' + error))
}

export const ReqLuz = async() => {
    await fetch('http://localhost:3000/luz')
        .then(resp => resp.json())
        .then((data: any) => {
                console.log('El porcentaje de la luz es: ' + chalk.bgWhiteBright(data.luz + ' %'));
        })
        .catch(error => console.log('Ha habido un error: ' + error))
}

export const ReqRumba = async() => {
    await fetch('http://localhost:3000/rumba')
        .then(resp => resp.json())
        .then((data: any) => {
                console.log('Las coordenadas del rumba son: ' + chalk.bgCyanBright(data.rumba[0] + ' ' + data.rumba[1]));
        })
        .catch(error => console.log('Ha habido un error: ' + error))
}