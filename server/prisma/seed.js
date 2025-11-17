import prisma from '../src/config/prisma.config.js'

const personaData = [
  { persona_id: 1, persona_name: 'Absolute Luxurer', description: 'Where heritage meets contemporary opulence' },
  { persona_id: 2, persona_name: 'Megacitier', description: 'Urban elegance for the modern metropolitan' },
  { persona_id: 3, persona_name: 'SocialWearer', description: 'Fashion that tells your story' },
  { persona_id: 4, persona_name: 'Experiencer', description: 'Living life through curated moments' },
  { persona_id: 5, persona_name: 'LITTLEPRINCE', description: 'Youthful sophistication redefined' },
  { persona_id: 6, persona_name: 'Fashionista', description: 'Trendsetting with timeless grace' },
  { persona_id: 7, persona_name: 'Status Seeker', description: 'Excellence as a standard, not an exception' },
  { persona_id: 8, persona_name: 'Classpirational', description: 'Aspirational elegance within reach' },
]

const brandData = [
  { brand_name: 'Maison Eight' },
  { brand_name: 'Hermès' },
  { brand_name: 'Gucci' },
  { brand_name: 'Chanel' },
  { brand_name: 'Dior' },
  { brand_name: 'Louis Vuitton' },
  { brand_name: 'Valentino' },
  { brand_name: 'Prada' },
  { brand_name: 'Bottega Veneta' },
]

const productData = [
  // Silk Evening Gown - 3 colors
  { product_name: 'Silk Evening Gown', category: 'Dresses', price: 3200, brand_name: 'Maison Eight', color: 'Black', persona_id: 1 },
  { product_name: 'Silk Evening Gown', category: 'Dresses', price: 3200, brand_name: 'Maison Eight', color: 'Navy', persona_id: 1 },
  { product_name: 'Silk Evening Gown', category: 'Dresses', price: 3200, brand_name: 'Maison Eight', color: 'Burgundy', persona_id: 1 },
  
  // Tailored Blazer - 2 colors
  { product_name: 'Tailored Blazer', category: 'Outerwear', price: 2100, brand_name: 'Hermès', color: 'Navy', persona_id: 2 },
  { product_name: 'Tailored Blazer', category: 'Outerwear', price: 2100, brand_name: 'Hermès', color: 'Charcoal', persona_id: 2 },
  
  // Leather Handbag - 3 colors
  { product_name: 'Leather Handbag', category: 'Accessories', price: 1800, brand_name: 'Gucci', color: 'Brown', persona_id: 3 },
  { product_name: 'Leather Handbag', category: 'Accessories', price: 1800, brand_name: 'Gucci', color: 'Black', persona_id: 3 },
  { product_name: 'Leather Handbag', category: 'Accessories', price: 1800, brand_name: 'Gucci', color: 'Tan', persona_id: 3 },
  
  // Cashmere Coat - 2 colors
  { product_name: 'Cashmere Coat', category: 'Outerwear', price: 4500, brand_name: 'Chanel', color: 'Beige', persona_id: 1 },
  { product_name: 'Cashmere Coat', category: 'Outerwear', price: 4500, brand_name: 'Chanel', color: 'Black', persona_id: 1 },
  
  // Couture Dress - 1 color
  { product_name: 'Couture Dress', category: 'Dresses', price: 5200, brand_name: 'Dior', color: 'White', persona_id: 6 },
  
  // Designer Heels - 2 colors
  { product_name: 'Designer Heels', category: 'Shoes', price: 950, brand_name: 'Louis Vuitton', color: 'Black', persona_id: 6 },
  { product_name: 'Designer Heels', category: 'Shoes', price: 950, brand_name: 'Louis Vuitton', color: 'Nude', persona_id: 6 },
  
  // Silk Blouse - 2 colors
  { product_name: 'Silk Blouse', category: 'Tops', price: 890, brand_name: 'Valentino', color: 'White', persona_id: 3 },
  { product_name: 'Silk Blouse', category: 'Tops', price: 890, brand_name: 'Valentino', color: 'Ivory', persona_id: 3 },
  
  // Wool Trousers - 3 colors
  { product_name: 'Wool Trousers', category: 'Bottoms', price: 1200, brand_name: 'Prada', color: 'Black', persona_id: 2 },
  { product_name: 'Wool Trousers', category: 'Bottoms', price: 1200, brand_name: 'Prada', color: 'Gray', persona_id: 2 },
  { product_name: 'Wool Trousers', category: 'Bottoms', price: 1200, brand_name: 'Prada', color: 'Navy', persona_id: 2 },
  
  // Evening Clutch - 2 colors
  { product_name: 'Evening Clutch', category: 'Accessories', price: 780, brand_name: 'Bottega Veneta', color: 'Gold', persona_id: 4 },
  { product_name: 'Evening Clutch', category: 'Accessories', price: 780, brand_name: 'Bottega Veneta', color: 'Silver', persona_id: 4 },
  
  // Cashmere Sweater - 3 colors
  { product_name: 'Cashmere Sweater', category: 'Tops', price: 1450, brand_name: 'Hermès', color: 'Gray', persona_id: 7 },
  { product_name: 'Cashmere Sweater', category: 'Tops', price: 1450, brand_name: 'Hermès', color: 'Navy', persona_id: 7 },
  { product_name: 'Cashmere Sweater', category: 'Tops', price: 1450, brand_name: 'Hermès', color: 'Camel', persona_id: 7 },
  
  // Leather Loafers - 2 colors
  { product_name: 'Leather Loafers', category: 'Shoes', price: 1150, brand_name: 'Gucci', color: 'Brown', persona_id: 2 },
  { product_name: 'Leather Loafers', category: 'Shoes', price: 1150, brand_name: 'Gucci', color: 'Black', persona_id: 2 },
  
  // Silk Scarf - 1 color
  { product_name: 'Silk Scarf', category: 'Accessories', price: 420, brand_name: 'Hermès', color: 'Multicolor', persona_id: 8 },
]

async function seedDB() {
  console.log('Seeding personas...')
  
  for (const persona of personaData) {
    await prisma.persona.upsert({
      where: { persona_id: persona.persona_id },
      update: {},
      create: persona
    })
  }
  
  console.log('Personas seeded successfully!')
  
  console.log('Seeding brands...')
  
  for (const brand of brandData) {
    const existingBrand = await prisma.brand.findFirst({
      where: { brand_name: brand.brand_name }
    })
    
    if (!existingBrand) {
      await prisma.brand.create({
        data: brand
      })
    }
  }
  
  console.log('Brands seeded successfully!')
  
  console.log('Seeding products...')
  
  for (const product of productData) {
    const brand = await prisma.brand.findFirst({
      where: { brand_name: product.brand_name }
    })
    
    await prisma.product.create({
      data: {
        product_name: product.product_name,
        category: product.category,
        price: product.price,
        color: product.color,
        brand_id: brand.brand_id,
        persona_id: product.persona_id
      }
    })
  }
  
  console.log('Products seeded successfully!')
}

seedDB()
  .then(() => console.log('DB Seed successful'))
  .catch(err => console.error('Seed error:', err))
  .finally(() => prisma.$disconnect())