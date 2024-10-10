import express from 'express';
import { CurrencyConvertionController } from '../controllers/currencyConvertionController';

const convertionController = new CurrencyConvertionController();

export const convertionRouter = express.Router();

convertionRouter.post('', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        await convertionController.convertCurrency(req, res, next);
    } catch (error) {
        next(error);
    }
});
