import { ReqRumba, ReqPers as ReqPers, ReqTemp as ReqTemp, ReqLuz } from "./Client";
import { PostLuz as PostLuz, PostPers as PostPers, PostRumba, PostTemp as PostTemp } from "./Device";
import { Server, storeData } from "./Server";

const interval = 2000;
// Iniciamos el servidor
Server();

setInterval(() => {
    console.log('||||||||||||||||||||||||||||||||||||||||||\n')
    console.log('---Comienzan los datos---')
    console.log(storeData.datos), 2000
    // Metemos datos en el server
    PostTemp();
    PostPers();
    PostLuz();
    PostRumba();
    
    // Pedimos que se ejecuten los metodos de los clientes
    console.log('* Request de los clientes: ')
    console.log('--------------------------------')
    ReqTemp();
    ReqPers();
    ReqLuz();
    ReqRumba();
}, interval)