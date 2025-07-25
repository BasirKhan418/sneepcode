import {z} from 'zod';

export const PingSchema= z.object({
    message: z.string().min(1, "Message cannot be empty"),
    timestamp: z.string().optional(),
});