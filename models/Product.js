// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {
//may include matching 2 ids and selecting that data
  return Product.findOne({
    //may include a where statement for id: body.category_id
        attributes: [
          'id',
          'product_name',
          'price',
          'stock', 
          'category_id',
        ],
        include: [
          {
            model: models.Category,
            attributes: ['id', 'category_name'],
        include: {
              model: models.Tag,
              attributes: ['id', 'tag_name']
            }
          }
        ]
      });
    };
  

//Attributes
//id,product_name,price,stock, category_id
//once you have data check of category id is not repeating, if yes then delete

//from model category
//id, category_name 
//from model tag
//id, tag_name
// set up fields and rules for Product model



Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          isDecimal: true 
        }
      },
    stock: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 10,
          validate: {
            isNumeric: true 
          }
        },
    category_id: {
          type: DataTypes.INTEGER, 
          references: {
          model: 'category', 
          key: 'id'
          }
        } 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
