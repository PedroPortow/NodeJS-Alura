'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pessoas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pessoas.hasMany(models.Turmas, {
        foreignKey: 'docente_id'
      })
      Pessoas.hasMany(models.Matriculas, {
        foreignKey: 'estudante_id',
        scope: { status: 'confirmado'},
        as: 'aulasMatriculadas'
      })
    }
  }
  Pessoas.init({
    nome: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        funcaoValidadora: function(dado){
          if(dado.length < 2) throw new Error('Nome inválido, deve ter mais de 2 caracteres')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type:DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'dado do tipo email invalido'
        }
      }},
    role: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    defaultScope: {
      where: {ativo: true}
    },
    scopes: {
      todos: {where: {}},
      //other constraints...
    },  
    modelName: 'Pessoas',
  });
  return Pessoas;
};