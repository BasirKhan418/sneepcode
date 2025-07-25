import {ZodObject} from 'zod'
import { Request,Response,NextFunction } from 'express';

//validate body
export const ValidateRequestBody=(schema:ZodObject)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        try{
        await schema.parseAsync(req.body);
        console.log("Request body is valid");
        next();
        }catch(err){
            res.status(400).json({
                error: "Invalid request body",
            });
            console.error("Validation error:", err);

        }
    }

}

//validate query
export const ValidateRequestQuery=(schema:ZodObject)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
        try{
        await schema.parseAsync(req.query);
        console.log("Request query is valid");
        next();
        }catch(err){
            res.status(400).json({
                error: "Invalid request query",
            });
            console.error("Validation error:", err);

        }
    }

}