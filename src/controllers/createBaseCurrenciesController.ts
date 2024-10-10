import { createRequiredCurrencies } from "../services/createRequiredCurrencies";
import express from 'express';



export class CreateBaseCurrenciesController {
    async createBaseCurrencies(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const baseCurrencies = await createRequiredCurrencies();
            res.status(201).json({message: 'Currencies created', baseCurrencies});
        } catch (error) {
            next(error);
        }
    }
}