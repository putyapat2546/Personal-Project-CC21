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
}

seedDB()
  .then(() => console.log('DB Seed successful'))
  .catch(err => console.error('Seed error:', err))
  .finally(() => prisma.$disconnect())