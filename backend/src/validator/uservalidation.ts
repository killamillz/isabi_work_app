import z from 'zod'

export const userSchema = z.object({
    username: z.string({
        required_error: "Username cannot be empty"
    }),

    email: z.string({
        required_error: "email cannot be empty"
    }).email({
        message: "Please enter a valid email address"
    }),

    phone_number: z.string({
        required_error: "Phone Number cannot be empty"
    }).min(11).max(11),
    
    password: z.string({
        required_error: "Password cannot be empty"
    }).min(5).max(10)
});