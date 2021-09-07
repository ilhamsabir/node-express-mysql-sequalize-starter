// import sequelize
import { Sequelize } from 'sequelize';
// import connection
import db from '../config/db';

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Users = db.define('users', {
	// Define attributes
	id: {
		primaryKey: true,
		type: Sequelize.UUID,
		defaultValue: Sequelize.UUIDV1
	},
	name: {
		type: DataTypes.STRING
	},
},{
	// Freeze Table Name
	freezeTableName: true
});

// Export model Product
export default Users;