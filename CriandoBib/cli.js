const chalk = require('chalk');
const validaUrls = require('./http-validacao');

const getFile = require('./index')

const path = process.argv;

async function textProcess(path){
    const results = await getFile(path[2])
    if (path[3] === 'validar'){
        console.log('links validados', await validaUrls(results))
    }else{
        console.log(chalk.yellow('lista de linbks'), results);
    }

}


textProcess(path)