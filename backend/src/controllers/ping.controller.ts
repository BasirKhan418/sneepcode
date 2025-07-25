import { Request,Response,NextFunction } from "express";
import { InternalServerError } from "../utils/errors/app.error";
import fs from 'fs';
const PingController=(req:Request,res:Response,next:NextFunction)=>{
    try{
        fs.readFileSync('/path/to/file');
    }
    catch(err){
        throw new InternalServerError('File not found');
    }
}
export default PingController;