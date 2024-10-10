import express from "express";
import { FindCurrencyById } from "../services/findCurrencyById";
import { AppError } from "../middleware/errorMiddleware";

const findCurrencyById = new FindCurrencyById();

export class FindCurrencyByIdController{
    async findCurrencyById (req: express.Request, res: express.Response, next: express.NextFunction){
        try{
            const { id } = req.params
            const currency = await findCurrencyById.findById(Number(id));
            if (currency === null)
                throw new AppError('Currency Not Found', 404);
            res.status(200).json({currency});
        }
        catch(error){
            next(error);
        }
    }
}