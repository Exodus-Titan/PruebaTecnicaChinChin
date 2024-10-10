import express from 'express';
import { FindAllCurrenciesController } from '../controllers/findAllCurrenciesController';
import { FindCurrencyByIdController } from '../controllers/findCurrencyByIdController';
import { FindCurrencyBySymbolController } from '../controllers/findCurrencyBySymbolController';

const findAllCurrenciesController = new FindAllCurrenciesController();
const findCurrencyByIdController = new FindCurrencyByIdController();
const findCurrencyBySymbolController = new FindCurrencyBySymbolController();

export const findCurrenciesRouter = express.Router();

findCurrenciesRouter.get("/", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
    findAllCurrenciesController.findAllCurrencies(req, res, next)
    }
    catch(error){
        next(error);
    }
});

findCurrenciesRouter.get("/:id", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
    findCurrencyByIdController.findCurrencyById(req, res, next)
    }
    catch(error){
        next(error);
    }
});

findCurrenciesRouter.get("/symbol/:symbol", async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
    findCurrencyBySymbolController.findCurrencyBySymbol(req, res, next)
    }
    catch(error){
        next(error);
    }
});