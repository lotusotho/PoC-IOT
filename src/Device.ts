const http = require('http');

function postData(path : string, data : string) {
    const postBody = {
        hostname: 'localhost',
        port: 3000,
        path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length
        }
    }

    const req = http.request(postBody);
    req.write(data);
    req.end();
}

export function PostTemp() {
    setInterval(() => {
        const temperature = (Math.random() * 30).toFixed(2);
        const data = JSON.stringify({ temperature });
        postData('/temperature', data);
    }, 1000)
}

export function PostPers() {
    setInterval(() => {
        const persianas = Math.random() < 0.5;
        const data = JSON.stringify({ persianas });
        postData('/persianas', data);
    }, 1000)
}

export function PostLuz() {
    setInterval(() => {
        const luz = (Math.random() * 100).toFixed(2);
        const data = JSON.stringify({ luz });

        postData('/luz', data);
    }, 1000)
}

export function PostRumba() {
    setInterval(() => {
        const rumba = ['X: ' + (Math.random() * 100).toFixed(2), 'Y: ' + (Math.random() * 100).toFixed(2)];
        const data = JSON.stringify({ rumba });

        postData('/rumba', data);
    }, 1000)
}



