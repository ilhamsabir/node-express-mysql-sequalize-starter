'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		const bcrypt = require('bcryptjs')
		const { v4: uuidv4 } = require('uuid');
		const password = bcrypt.hashSync('123456', 10);
		const users = [
			{
				id: uuidv4(),
				name: 'Doe',
				email: 'example@example.com',
				password: password,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				id: uuidv4(),
				name: 'John',
				email: 'example@gmail.com',
				password: password,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		]
		return queryInterface.bulkInsert('Users', users);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('Users', null, {});
	}
};
