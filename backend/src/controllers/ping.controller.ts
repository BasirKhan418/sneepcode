import { Request,Response } from "express";
const PingController=(req:Request,res:Response)=>{
    res.send('Pong');
}
export default PingController;