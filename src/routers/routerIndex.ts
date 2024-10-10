import express from "express";

import { createCurrencyRouter } from "./createCurrencyRouter";
import { updateRouter } from "./updateCurrencyRouter";
import { findCurrenciesRouter } from "./findCurrenciesRouter";
import { convertionRouter } from "./convertionRouter";


export function routerApi(app: express.Application){
    const router = express.Router();
    app.use("/api", router);
    router.use("/create", createCurrencyRouter);
    router.use("/update", updateRouter);
    router.use("/find", findCurrenciesRouter);
    router.use("/convert", convertionRouter);
    return router
}