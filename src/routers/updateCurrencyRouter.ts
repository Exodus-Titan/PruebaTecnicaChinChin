import express from 'express';
import { UpdateCurrencyByIdController } from '../controllers/updateCurrencyByIdController';
import { UpdateCurrencyBySymbolController } from '../controllers/updateCurrencyBySymbolController';
import { UpdateAllPricesController } from '../controllers/updateAllPricesController';

const updateCurrencyBySymbolController = new UpdateCurrencyBySymbolController();
const updateCurrencyByIdController = new UpdateCurrencyByIdController();
const updateAllPricesController = new UpdateAllPricesController();

export const updateRouter = express.Router();

updateRouter.patch('/byId', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
    await updateCurrencyByIdController.updateCurrencyById(req, res, next)
    }
    catch(error){
        next(error);
    }
});

updateRouter.patch('/bySymbol', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
    await updateCurrencyBySymbolController.updateCurrencyBySymbol(req, res, next)
    }
    catch(error){
        next(error);
    }
});

updateRouter.patch('/allAPI', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
    await updateAllPricesController.updateAllPrices(req, res, next)
    }
    catch(error){
        next(error);
    }
});

updateRouter.patch('/byIdAPI', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
    await updateCurrencyByIdController.updateCurrencyByIdAPI(req, res, next)
    }
    catch(error){
        next(error);
    }
});

updateRouter.patch('/bySymbolAPI', async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
    await updateCurrencyBySymbolController.updateCurrencyBySymbolAPI(req, res, next)
    }
    catch(error){
        next(error);
    }
});