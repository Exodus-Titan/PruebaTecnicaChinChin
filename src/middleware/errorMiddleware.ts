import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

class AppError extends Error {
    public statusCode: number;
    public isOperational: boolean;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true; 
        Error.captureStackTrace(this, this.constructor); 
    }
}


const errorMiddleware = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    dotenv.config();
    
    res.status(err.statusCode || 500).json({
        message: err.message || 'Ha ocurrido un error inesperado.',
        error: process.env.NODE_ENV === 'development' ? err : {}, 
    });
};

export { AppError, errorMiddleware };
