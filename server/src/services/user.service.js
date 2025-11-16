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
