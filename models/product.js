'use strict';
const {
  Model
} = require('sequelize');
const product_order = require('./product_order');
const product_category = require('./product_category');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.Order, {through: product_order})
      Product.belongsToMany(models.Category, {through: product_category})
      
    }
  }
  Product.init({
    name_product: DataTypes.STRING,
    description_product: DataTypes.STRING,
    price_product: DataTypes.FLOAT,
    category_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};