import express from 'express';
import { CurrencyController } from '../controllers/CurrencyController';
import { CreateBaseCurrenciesController } from '../controllers/createBaseCurrenciesController';

const currencyController = new CurrencyController();
const createBaseCurrenciesController = new CreateBaseCurrenciesController();

export const createCurrencyRouter = express.Router();

createCurrencyRouter.post('', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
	try {
		await currencyController.createCurrency(req, res, next);
	} catch (error) {
		next(error);
	}
});

createCurrencyRouter.post('/base', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        await createBaseCurrenciesController.createBaseCurrencies(req, res, next);
    } catch (error) {
        next(error);
    }
});