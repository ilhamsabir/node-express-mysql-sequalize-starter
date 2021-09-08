import express from 'express'
import ProductController from '../controller/ProductController'
// import UserController from '../controller/UserController'
import AuthController from '../controller/AuthController'
import Auth from '../config/auth'
const api = express.Router();
const Guard = Auth.authenticate('jwt', { session: false })

api.route('/products').get(Guard , ProductController.get);
api.route('/product/:id').get(Guard, ProductController.getDetail);
api.route('/product').post(ProductController.create);
api.route('/product/:id').put(ProductController.update);
api.route('/product/:id').delete(ProductController.delete);

api.route('/register').post(AuthController.register);
api.route('/login').post(AuthController.login);

export default api
