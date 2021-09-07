// import sequelize
import { Sequelize } from 'sequelize';
// import connection
import db from '../config/db';

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Products = db.define('products', {
	// Define attributes
	name: {
		type: DataTypes.STRING
	},
	price: {
		type: DataTypes.DOUBLE
	}
},{
	// Freeze Table Name
	freezeTableName: true
});

// Export model Product
export default Products;