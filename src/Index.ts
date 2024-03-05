import { ReqRumba, ReqPers as ReqPers, ReqTemp as ReqTemp, ReqLuz } from "./Client";
import { PostLuz as PostLuz, PostPers as PostPers, PostRumba, PostTemp as PostTemp } from "./Device";
import { Server, storeData } from "./Server";

// Iniciamos el servidor
Server();

// Metemos datos en el server
PostTemp();
PostPers();
PostLuz();
PostRumba();

// Pedimos que se ejecuten los metodos de los clientes
ReqTemp();
ReqPers();
ReqLuz();
ReqRumba();
console.log("JSON entero: ", storeData)