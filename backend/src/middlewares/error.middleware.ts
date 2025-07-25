import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/errors/app.error";

export const appErrorHandler = (err: AppError, req: Request, res: Response, next: NextFunction) => {
   
    res.status(err.statusCode).send({
        success: false,
        message: err.message,
    });
    
}