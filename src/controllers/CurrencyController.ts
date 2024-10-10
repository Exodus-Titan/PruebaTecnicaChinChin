import express from 'express';
import { CreateCurrency } from '../services/createCurrency'
import { CreateCurrencyDto } from '../dto/createCurrencyDto';
import { validateDto } from '../validation/dtoValidator';

const createCurrencyService = new CreateCurrency();

export class CurrencyController{

    async createCurrency (req: express.Request, res: express.Response, next: express.NextFunction){ 
        try{    

            const validation = await validateDto(CreateCurrencyDto, req.body)
            if(validation){
                return res.status(400).json({
                    message: validation,
                    errors: validation
                });
            }
            const dto = new CreateCurrencyDto(req.body.name, req.body.symbol, req.body.price_in_USDT);
            const currency = await createCurrencyService.createCurrency(dto);
            res.status(201).json({message: 'Currency created', currency});
        }
        catch(error){
            next(error);
        }
    }

}