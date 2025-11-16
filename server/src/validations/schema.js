import { z } from "zod";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const registerSchema = z.object({
	full_name: z.string().min(2, "Full name is required"),
	email: z.string().email("Invalid email format"),
	password: z.string().min(4, "Password at least 4 characters"),
})

export const loginSchema = z.object({
	email: z.string().email("Invalid email format"),
	password: z.string().min(4, "Password at least 4 characters"),
})
