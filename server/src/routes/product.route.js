import { Router } from "express";
import { getProducts, getProduct, addProduct } from "../controllers/product.controller.js";
import authenticateMiddleware from "../middlewares/authenticate.middleware.js";

const productRoute = Router()

productRoute.get('/', getProducts)
productRoute.get('/:id', getProduct)
productRoute.post('/', authenticateMiddleware, addProduct)

export default productRoute
