const http = require('http');

export function PostTemp() {
    setInterval(() => {
        const temperature = (Math.random() * 30).toFixed(2);
        const data = JSON.stringify({ temperature });

        const postBody = {
            hostname: 'localhost',
            port: 3000,
            path: '/temperature',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        }

        const req = http.request(postBody);
        req.write(data);
        req.end();
    }, 1000)
}

export function PostPers() {
    setInterval(() => {
        const persianas = Math.round(Math.random()) === 1 ? true : false;
        const data = JSON.stringify({ persianas });

        const postBody = {
            hostname: 'localhost',
            port: 3000,
            path: '/persianas',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        }

        const req = http.request(postBody);
        req.write(data);
        req.end();
    }, 1000)
}

export function PostLuz() {
    setInterval(() => {
        const luz = (Math.random() * 100).toFixed(2);
        const data = JSON.stringify({ luz });

        const postBody = {
            hostname: 'localhost',
            port: 3000,
            path: '/luz',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        }

        const req = http.request(postBody);
        req.write(data);
        req.end();
    }, 1000)
}

export function PostRumba() {
    setInterval(() => {
        const rumba = ['X: ' + (Math.random() * 100).toFixed(2), 'Y: ' + (Math.random() * 100).toFixed(2)];
        const data = JSON.stringify({ rumba });

        const postBody = {
            hostname: 'localhost',
            port: 3000,
            path: '/rumba',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        }

        const req = http.request(postBody);
        req.write(data);
        req.end();
    }, 1000)
}



