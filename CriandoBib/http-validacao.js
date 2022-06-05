const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function handleError(error){
  throw new Error(erro.message);
}

async function checaStatus(arrURLs){
   try{
    const arrayStatus = await Promise
    .all(arrURLs
        .map(async url => {
          const res = await fetch(url)
          return res.statuss
    })) 
    return arrayStatus
   }
   catch(err){
     handleError(err)
   }
}

function geraArrayDeUrls(arrLinks){
    // Object.values(objeto)
    return arrLinks.map((link) => Object.values(link).join())
}

async function validaURLs(arrLinks){
    const links =  geraArrayDeUrls(arrLinks)
    const statusLinks = await checaStatus(links)

    const resultados = arrLinks.map((objeto, indice) =>({
      ...objeto,
      status: statusLinks[indice]
    }))
    return resultados

}

module.exports = validaURLs   