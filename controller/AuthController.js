import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../model/user'
import { resCallback } from '../lib/helper'
require('dotenv').config();

const signin = async (res, user, password) => {
	if (user) {
		// check pwd
		const pwdBycrypt = await bcrypt.compare(password, user.password);

		// active JWT
		const token = jwt.sign({
			id: user.id,
			email: user.email,
		}, process.env.SECRET_KEY, { expiresIn: '365d' });

		user.password = '';

		// check if user exist and password match
		if (user && pwdBycrypt) {
			res
				.status(200)
				.send(resCallback(user, 200, 'success login', { JWT: token }));
		} else {
			res.status(404).send(resCallback([], 404, 'Auth Failed, email & password not match'));
		}

	} else {
		res.status(404).send(resCallback([], 404, 'Auth failed user not found'));
	}
}

exports.register = async (req, res) => {
	try {
		const payload = req.body
		const password = req.body.password
		const hash = bcrypt.hashSync(password, 10);
		payload.password = hash

		const existedUser = await User.findAll({
			where: {
				email: payload.email
			}
		});
		// console.log('existedUser: ', existedUser);

		if (existedUser.length > 0) {
			res
				.status(404)
				.send(resCallback('', 404, 'email already registered'));
		} else {
			const user = await User.create(payload);
			console.log('user: ', user);
			if (user) {
				return signin(res, user, password);
			} else {
				res
					.status(404)
					.send(resCallback([], 404, 'user not found'));
			}
		}

	} catch (err) {
		res
			.status(404)
			.send(resCallback([], 404, err));
	}
}

exports.login = async (req, res) => {
	try {
		const email = req.body.email;
		const password = req.body.password;
		const user = await User.findAll({ where: { email: email } });
		const response = user && user.length > 0 ? user[0] : null;
		return signin(res, response, password);
	} catch (error) {
		return res.status(404).send(error)
	}
}
