'use strict';
const {
  Model
} = require('sequelize');
const product_category = require('./product_category');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Category.belongsToMany(models.Product, {through: product_category})
    }
  }
  Category.init({
    name_category: DataTypes.STRING,
    description_category: DataTypes.STRING,
    product_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};