'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Output extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Output.init({
    id_client: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Clients',
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
    cut: DataTypes.INTEGER,
    value: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Output',
  });

  Output.associate = function(models) {
    Output.belongsTo(models.Client, { foreignKey: 'id_client' });
  };

  Output.associate = function(models) {
    Output.belongsTo(models.Product, { foreignKey: 'id_product' });
  };

  return Output;
};