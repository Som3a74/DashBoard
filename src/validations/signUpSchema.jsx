import { z, } from "zod";

const signUpSchema = z.object({
    name: z.string().min(1, { message: "name is required" }).max(10, { message: "Name is too long" }),
    email: z.string().min(1, { message: "email is required" }).email(),
    password: z.string().min(8, { message: "Password is required" }).max(50, { message: "Password is too long" }),
})

export { signUpSchema }