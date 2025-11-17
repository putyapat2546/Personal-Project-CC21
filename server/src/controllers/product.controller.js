import createHttpError from "http-errors"
import { getAllProducts, getProductById, getProductsByPersona, createProduct } from '../services/product.service.js'

export const getProducts = async (req, res, next) => {
  try {
    const { personaId } = req.query
    
    let products
    if (personaId) {
      products = await getProductsByPersona(parseInt(personaId))
    } else {
      products = await getAllProducts()
    }
    
    // Return array directly for easier frontend consumption
    res.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    next(error)
  }
}

export const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params
    
    const product = await getProductById(id)
    
    if (!product) {
      return next(createHttpError[404]('Product not found'))
    }
    
    // Return product object directly
    res.json(product)
  } catch (error) {
    console.error('Error fetching product:', error)
    next(error)
  }
}

export const addProduct = async (req, res, next) => {
  try {
    const productData = req.body
    
    // Validate required fields
    if (!productData.product_name || !productData.brand_id || !productData.persona_id || !productData.category || !productData.price) {
      return next(createHttpError[400]('Missing required fields'))
    }
    
    const product = await createProduct(productData)
    
    res.status(201).json({
      message: 'Product created successfully',
      product: product
    })
  } catch (error) {
    console.error('Error creating product:', error)
    next(error)
  }
}
