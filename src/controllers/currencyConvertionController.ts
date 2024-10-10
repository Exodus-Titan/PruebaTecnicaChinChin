import express from 'express';
import { convertionDto } from '../dto/convertionDto';
import { CurrencyConvertion } from '../services/currencyConversion';    
import { validateDto } from '../validation/dtoValidator';

const convertionService = new CurrencyConvertion();

export class CurrencyConvertionController{

    async convertCurrency (req: express.Request, res: express.Response, next: express.NextFunction){ 
        try{    

            const validation = await validateDto(convertionDto, req.body)
            if(validation){
                return res.status(400).json({
                    message: validation,
                    errors: validation
                });
            }
            const dto = new convertionDto(req.body.symbol, req.body.amount);
            const result = await convertionService.convertCurrency(dto);
            res.status(200).json({message: 'Currency converted', result});
        }
        catch(error){
            next(error);
        }
    }
}