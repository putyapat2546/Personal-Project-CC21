import prisma from "../config/prisma.config.js"

export const getAllProducts = async () => {
  const products = await prisma.product.findMany({
    include: {
      brand: true,
      persona: true
    }
  })
  
  return products
}

export const getProductById = async (id) => {
  const product = await prisma.product.findUnique({
    where: {
      product_id: parseInt(id)
    },
    include: {
      brand: true,
      persona: true
    }
  })
  
  return product
}

export const getProductsByPersona = async (personaId) => {
  const products = await prisma.product.findMany({
    where: {
      persona_id: personaId
    },
    include: {
      brand: true,
      persona: true
    }
  })
  
  return products
}

export const createProduct = async (productData) => {
  const product = await prisma.product.create({
    data: productData,
    include: {
      brand: true,
      persona: true
    }
  })
  
  return product
}
