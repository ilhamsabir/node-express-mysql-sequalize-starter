import Users from '../model/user';
import {
	resCallback,
} from '../lib/helper'

// Get semua user
exports.get = async (req, res) => {
	try {
		const user = await Users.findAll();
		if (user && user.length > 0) {
			res
				.status(200)
				.send(resCallback(user, 200, 'success'));
		} else {
			res
				.status(404)
				.send(resCallback([], 404, 'not found'));
		}
	} catch (err) {
		res
			.status(404)
			.send(resCallback([], 404, err));
	}
}

// Get user berdasarkan id
exports.getDetail = async (req, res) => {
	try {
		const user = await Users.findAll({
			where: {
				id: req.params.id
			}
		});

		if (user && user.length > 0) {
			res
				.status(200)
				.send(resCallback(user[0], 200, 'success'));
		} else {
			res
				.status(404)
				.send(resCallback([], 404, 'not found'));
		}
	} catch (err) {
		res
			.status(404)
			.send(resCallback([], 404, err));
	}
}

// Create user baru
exports.create = async (req, res) => {
	try {
		const payload = req.body
		const user = await Users.create(payload);

		if (user) {
			res
				.status(200)
				.send(resCallback(user, 200, 'success'));
		} else {
			res
				.status(404)
				.send(resCallback([], 404, 'user not found'));
		}
	} catch (err) {
		res
			.status(404)
			.send(resCallback([], 404, err));
	}
}

// Update user berdasarkan id
exports.update = async (req, res) => {
	try {
		const user = await Users.update(req.body, {
			where: {
				id: req.params.id
			}
		});
		if (user) {
			res
				.status(200)
				.send(resCallback(user, 200, 'success'));
		} else {
			res
				.status(404)
				.send(resCallback([], 404, 'user not found'));
		}
	} catch (err) {
		res
			.status(404)
			.send(resCallback([], 404, err));
	}
}

// Delete user berdasarkan id
exports.delete = async (req, res) => {
	try {
		const user = await Users.destroy({
			where: {
				id: req.params.id
			}
		});
		if (user) {
			res
				.status(200)
				.send(resCallback(user, 200, 'success'));
		} else {
			res
				.status(404)
				.send(resCallback([], 404, 'user not found'));
		}
	} catch (err) {
		res
			.status(404)
			.send(resCallback([], 404, err));
	}
}
