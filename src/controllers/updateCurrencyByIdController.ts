import express from 'express';
import { UpdateCurrencyById } from '../services/updateCurrencyById'
import { UpdateByIdDto } from '../dto/updateByIdDto';
import { validateDto } from '../validation/dtoValidator';
import { idDto } from '../dto/idDto';
import { UpdateCurrencyByIdAPI } from '../services/updateCurrencyByIdAPI';

const updateCurrencyById = new UpdateCurrencyById();
const updateCurrencyByIdAPI = new UpdateCurrencyByIdAPI();

export class UpdateCurrencyByIdController{
    async updateCurrencyById (req: express.Request, res: express.Response, next: express.NextFunction){ 
        try{    
            const validation = await validateDto(UpdateByIdDto, req.body)
            if(validation){
                return res.status(400).json({
                    message: validation,
                    errors: validation
                });
            }
            const dto = new UpdateByIdDto(req.body.id, req.body.price_in_USD);
            const currency = await updateCurrencyById.updateCurrencyById(dto);
            res.status(200).json({message: 'Currency updated', currency});
        }
        catch(error){
            next(error);
        }
    }

    async updateCurrencyByIdAPI (req: express.Request, res: express.Response, next: express.NextFunction){ 
        try{    
            const validation = await validateDto(idDto, req.body)
            if(validation){
                return res.status(400).json({
                    message: validation,
                    errors: validation
                });
            }

            const currency = await updateCurrencyByIdAPI.updateCurrencyByIdAPI(Number(req.body.id));
            res.status(200).json({message: 'Currency updated', currency});
        }
        catch(error){
            next(error);
        }
    }
}