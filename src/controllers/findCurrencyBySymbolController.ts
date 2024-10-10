import express from "express";
import { FindCurrencyBySymbol } from "../services/findCurrencyBySymbol";
import { AppError } from "../middleware/errorMiddleware";

const findCurrencyById = new FindCurrencyBySymbol();

export class FindCurrencyBySymbolController{
    async findCurrencyBySymbol (req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            const { symbol } = req.params
            const currency = await findCurrencyById.findBySymbol(symbol);
            if (currency === null)
                throw new AppError('Currency Not Found', 404);
            res.status(200).json({currency});
        }
        catch(error){
            next(error);
        }
    }
}