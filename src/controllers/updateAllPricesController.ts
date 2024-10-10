import { updateAllPrices } from "../services/updateAllPrices";
import express from 'express';
import { FindAllCurrencies } from "../services/findAllCurrencies";

const findAllCurrencies = new FindAllCurrencies();

export class UpdateAllPricesController{
    async updateAllPrices(req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            updateAllPrices();
            const currencies = await findAllCurrencies.getAllCurrencies();
            return res.status(200).json({message: 'All prices updated', currencies});
        }
        catch(error){
            next(error)
        }
    }
}