// Import model Product
import Products from "../model/Products";

// Get semua product
exports.get = async (req, res) => {
	try {
		const product = await Products.findAll();
		if (product && product.length > 0) {
			res.status(200).send(product);
		} else {
			res.status(404).send({ data: [], message: 'not found' });
		}
	} catch (err) {
		res.status(404).send(err);
	}
}

// Get product berdasarkan id
exports.getDetail = async (req, res) => {
	try {
		const product = await Products.findAll({
			where: {
				id: req.params.id
			}
		});

		if (product && product.length > 0) {
			res.status(200).send(product[0]);
		} else {
			res.status(404).send({ data: [], message: 'not found' });
		}
	} catch (err) {
		res.status(404).send(err);
	}
}

// Create product baru
exports.create = async (req, res) => {
	try {
		const payload = req.body
		const product = await Products.create(payload);
		console.log('product: ', product);
		if (product) {
			res.status(200).send(product);
		} else {
			res.status(404).send({ data: [], message: 'not found' });
		}
	} catch (err) {
		res.status(404).send(err);
	}
}

// Update product berdasarkan id
exports.update = async (req, res) => {
	try {
		await Products.update(req.body, {
			where: {
				id: req.params.id
			}
		});
		const msg = {
			"message": "Product Updated"
		};
		res.status(200).send(msg);
	} catch (err) {
		res.status(404).send(err);
	}
}

// Delete product berdasarkan id
exports.delete = async (req, res) => {
	try {
		await Products.destroy({
			where: {
				id: req.params.id
			}
		});
		const msg = {
			"message": "Product Deleted"
		};
		res.status(200).send(msg);
	} catch (err) {
		res.status(404).send(err);
	}
}