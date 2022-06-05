// import read from './read.md'
const fs = require('fs')
const chalk = require('chalk')

function trataError(err){
    throw new Error(chalk.red(err.code, 'não há arquivo no chaminho'));
}


async function getFile(path){
    const enconding = 'utf-8'
    try{
        const texto = await fs.promises.readFile(path, enconding)
        return getLinks(texto)
    }
    catch(err){
        trataError(err);
    }
}

function getLinks(texto){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arr = [];
    let temp;
    while((temp = regex.exec(texto)) !== null){
        arr.push({ [temp[1]]: temp[2] })
    }

    return arr.length === 0 ? 'n há libks' : arr;
}

//getFile('./read.md')

module.exports = getFile



