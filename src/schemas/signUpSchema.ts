import { z } from "zod";

export const usernameValidation = z
    .string()
    .min(2, "Username must be at least 2 characters")
    .max(50, "Username must be at most 50 characters") // Assuming a max length; adjust as needed
    .regex(/^[a-zA-Z0-9_]+$/, "Username must not contain special characters"); // Added regex pattern


export const signUpSchema = z.object({
    username:usernameValidation,
    email:z.string().email({message:'Invalud email address'}),
    password:z.string().min(6,{message:"password must be at least 6 characters"})
})