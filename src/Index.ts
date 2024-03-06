import { ReqRumba, ReqPers as ReqPers, ReqTemp as ReqTemp, ReqLuz } from "./Client";
import { PostLuz as PostLuz, PostPers as PostPers, PostRumba, PostTemp as PostTemp } from "./Device";
import { Server, storeData } from "./Server";
import chalk from 'chalk';

const interval = 2000;
// Iniciamos el servidor
Server();

setInterval(() => {
    console.clear();
    console.log(chalk.bgWhite('||||||||||||||||||||||||||||||||||||||||||\n'))
    console.log(chalk.bgBlueBright('---Comienzan los datos---'))
    console.log(chalk.bgBlackBright(storeData.datos)), 2000
    // Metemos datos en el server
    PostTemp();
    PostPers();
    PostLuz();
    PostRumba();
    
    // Pedimos que se ejecuten los metodos de los clientes
    console.log(chalk.bgBlueBright('* Request de los clientes: '))
    console.log('--------------------------------')
    ReqTemp();
    ReqPers();
    ReqLuz();
    ReqRumba();
}, interval)