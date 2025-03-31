import { z } from "zod";

const signInSchema = z.object({
    email: z.string().min(1, { message: "email is required" }).email(),
    password: z.string().min(8, { message: "Password is required" }),
})

export { signInSchema }