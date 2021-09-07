// import sequelize
import { Sequelize } from 'sequelize'

require('dotenv').config()

const config = {
	host : process.env.DB_HOST,
	user : process.env.DB_USER,
	password: process.env.DB_PWD,
	database: process.env.DB_NAME
}

// create connection
const db = new Sequelize(config.database, config.user, config.password, {
	host: config.host,
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

// export connection
export default db;