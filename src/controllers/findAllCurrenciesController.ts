import express from 'express';
import { FindAllCurrencies } from '../services/findAllCurrencies';

const findAllCurrencies = new FindAllCurrencies();

export class FindAllCurrenciesController{
    async findAllCurrencies (req: express.Request, res: express.Response, next: express.NextFunction){ 
        try{    
            const currencies = await findAllCurrencies.getAllCurrencies();
            res.status(200).json({currencies});
        }
        catch(error){
            next(error);
        }
    }
}