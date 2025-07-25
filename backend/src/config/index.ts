import dotenv from 'dotenv';
type Config = {
    port: number;
}
dotenv.config();
console.log('Environment variables loaded from .env file');

export const ServerConfig={
port:parseInt(process.env.PORT || '3000')
}
