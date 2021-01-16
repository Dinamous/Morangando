'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Input extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Input.init({
    id_provider:{
      type: DataTypes.INTEGER,
      references: {
        model: 'Providers',
        key: 'id',
      },
    },
    id_product: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
        key: 'id',
      },
    },
    quantity: DataTypes.INTEGER,
    
  }, {
    sequelize,
    modelName: 'Input',
  });

  Input.associate = function(models) {
    Input.belongsTo(models.Provider, { foreignKey: 'id_provider' });
  };

  Input.associate = function(models) {
    Input.belongsTo(models.Product, { foreignKey: 'id_product' });
  };

  return Input;
};