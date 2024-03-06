export class ClientData {
    private _temperatura: number;
    private _persianas: number;
    private _luz: number;
    private _rumba: [number, number];

    constructor(temperatura: number, persianas: number, luz: number, rumba: [number, number]) {
        this._temperatura = temperatura;
        this._persianas = persianas;
        this._luz = luz;
        this._rumba = rumba;
    }

    // Getters / Setters
    public get temperatura(): number {
        return this._temperatura;
    }
    public set temperatura(value: number) {
        this._temperatura = value;
    }

    public get persianas(): number {
        return this._persianas;
    }
    public set persianas(value: number) {
        this._persianas = value;
    }

    public get luz(): number {
        return this._luz;
    }

    public set luz(value: number) {
        this._luz = value;
    }

    public get rumba(): [number, number] {
        return this._rumba;
    }
    public set rumba(value: [number, number]) {
        this._rumba = value;
    }

    // To String
    public get datos(): string {
        return ('* Todos los datos guardados en el servidor: ' + 
        '\n--------------------------------------------------' +
        '\n Temperatura Actual: ' + this.temperatura
            + '\n Persianas ahora: ' + this.persianas +
            '\n Porcentaje de luz actual: ' + this.luz +
            '\n Coordenadas del rumba ahora: ' + this.rumba + '\n\n'
        )
    }
}