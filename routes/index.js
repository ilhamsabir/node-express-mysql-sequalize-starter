import express from 'express'
import ProductController from '../controller/ProductController'
import UserController from '../controller/UserController'
const api = express.Router();

//  user route
api.route('/products').get(ProductController.get);
api.route('/product/:id').get(ProductController.getDetail);
api.route('/product').post(ProductController.create);
api.route('/product/:id').put(ProductController.update);
api.route('/product/:id').delete(ProductController.delete);

api.route('/user').post(UserController.create);

export default api