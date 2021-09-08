// Import model Product
import Products from '../model/Products';
import {
	resCallback,
} from '../lib/helper'

// Get semua product
exports.get = async (req, res) => {
	try {
		const product = await Products.findAll();
		if (product && product.length > 0) {
			res
				.status(200)
				.send(resCallback(product, 200, 'success'));
		} else {
			res
				.status(404)
				.send(resCallback([], 404, 'Product not found'));
		}
	} catch (err) {
		res
			.status(404)
			.send(resCallback([], 404, err));
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
			res
				.status(200)
				.send(resCallback(product[0], 200, 'success'));
		} else {
			res
				.status(404)
				.send(resCallback([], 404, 'Product not found'));
		}
	} catch (err) {
		res
			.status(404)
			.send(resCallback([], 404, err));
	}
}

// Create product baru
exports.create = async (req, res) => {
	try {
		const payload = req.body
		const product = await Products.create(payload);

		if (product) {
			res
				.status(200)
				.send(resCallback(product, 200, 'success'));
		} else {
			res
				.status(404)
				.send(resCallback([], 404, 'Product not found'));
		}
	} catch (err) {
		res
			.status(404)
			.send(resCallback([], 404, err));
	}
}

// Update product berdasarkan id
exports.update = async (req, res) => {
	try {
		const product = await Products.update(req.body, {
			where: {
				id: req.params.id
			}
		});
		if (product) {
			res
				.status(200)
				.send(resCallback(product, 200, 'success'));
		} else {
			res
				.status(404)
				.send(resCallback([], 404, 'Product not found'));
		}
		res.status(200).send(msg);
	} catch (err) {
		res
			.status(404)
			.send(resCallback([], 404, err));
	}
}

// Delete product berdasarkan id
exports.delete = async (req, res) => {
	try {
		const product = await Products.destroy({
			where: {
				id: req.params.id
			}
		});
		if (product) {
			res
				.status(200)
				.send(resCallback(product, 200, 'success'));
		} else {
			res
				.status(404)
				.send(resCallback([], 404, 'Product not found'));
		}
	} catch (err) {
		res
			.status(404)
			.send(resCallback([], 404, err));
	}
}
