import express from 'express';
import { UpdateCurrencyBySymbol } from '../services/updateCurrencyBySymbol'
import { UpdateBySymbolDto } from '../dto/updateBySymbolDto';
import { validateDto } from '../validation/dtoValidator';
import { symbolDto } from '../dto/symbolDto';
import { UpdateCurrencyBySymbolAPI } from '../services/updateCurrencyBySymbolAPI';

const updateCurrencyBySymbol = new UpdateCurrencyBySymbol();
const updateCurrencyBySymbolAPI = new UpdateCurrencyBySymbolAPI();

export class UpdateCurrencyBySymbolController{
    async updateCurrencyBySymbol (req: express.Request, res: express.Response, next: express.NextFunction){ 
        try{    
            const validation = await validateDto(UpdateBySymbolDto, req.body)
            if(validation){
                return res.status(400).json({
                    message: validation,
                    errors: validation
                });
            }
            const dto = new UpdateBySymbolDto(req.body.symbol, req.body.price_in_USD);
            const currency = await updateCurrencyBySymbol.updateCurrencyBySymbol(dto);
            res.status(200).json({message: 'Currency updated', currency});
        }
        catch(error){
            next(error);
        }
    }

    async updateCurrencyBySymbolAPI (req: express.Request, res: express.Response, next: express.NextFunction){ 
        try{    
            const validation = await validateDto(symbolDto, req.body)
            if(validation){
                return res.status(400).json({
                    message: validation,
                    errors: validation
                });
            }
            const currency = await updateCurrencyBySymbolAPI.updateCurrencyBySymbolAPI(req.body.symbol);
            res.status(200).json({message: 'Currency updated', currency});
        }
        catch(error){
            next(error);
        }
    }
}