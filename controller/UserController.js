import Users from "../model/User";

// Get semua user
exports.get = async (req, res) => {
	try {
		const user = await Users.findAll();
		if (user && user.length > 0) {
			res.status(200).send(user);
		} else {
			res.status(404).send({ data: [], message: 'not found' });
		}
	} catch (err) {
		res.status(404).send(err);
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
			res.status(200).send(user[0]);
		} else {
			res.status(404).send({ data: [], message: 'not found' });
		}
	} catch (err) {
		res.status(404).send(err);
	}
}

// Create user baru
exports.create = async (req, res) => {
	try {
		const payload = req.body
		const user = await Users.create(payload);
		if (user) {
			res.status(200).send(user);
		} else {
			res.status(404).send({ data: [], message: 'not found' });
		}
	} catch (err) {
		res.status(404).send(err);
	}
}

// Update user berdasarkan id
exports.update = async (req, res) => {
	try {
		await Users.update(req.body, {
			where: {
				id: req.params.id
			}
		});
		const msg = {
			"message": "user Updated"
		};
		res.status(200).send(msg);
	} catch (err) {
		res.status(404).send(err);
	}
}

// Delete user berdasarkan id
exports.delete = async (req, res) => {
	try {
		await Users.destroy({
			where: {
				id: req.params.id
			}
		});
		const msg = {
			"message": "user Deleted"
		};
		res.status(200).send(msg);
	} catch (err) {
		res.status(404).send(err);
	}
}