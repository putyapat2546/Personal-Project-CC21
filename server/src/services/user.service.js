import prisma from "../config/prisma.config.js"

export const createUser = async (userData) => {
  const { email, password, full_name } = userData
  
  const user = await prisma.user.create({
    data: {
      email,
      password_hash: password,
      full_name,
    }
  })
  
  return user
}

export const getUserBy = async (key, value) => {
  // Handle different query types
  if (key === 'user_id' || key === 'id') {
    return await prisma.user.findUnique({
      where: {
        user_id: value
      }
    })
  }
  
  // For other unique fields like email
  const user = await prisma.user.findUnique({
    where: {
      [key]: value
    }
  })
  
  return user
}

export const getUserById = async (id) => {
  const user = await prisma.user.findUnique({
    where: {
      user_id: id
    }
  })
  
  return user
}

export const updateUserPersona = async (userId, personaId) => {
  const user = await prisma.user.update({
    where: {
      user_id: userId
    },
    data: {
      selected_persona: personaId
    }
  })
  
  return user
}
