const postsControlador = require('./posts-controlador');
const middlewaresAutenticacao = require('../usuarios')

module.exports = app => {
  app
    .route('/post')
    .get(postsControlador.lista)
    .post((req, res) => {
      middlewaresAutenticacao.bearer
    }, postsControlador.adiciona);
};
