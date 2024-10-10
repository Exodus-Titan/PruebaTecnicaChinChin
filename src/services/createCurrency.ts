import sequelize from "../database/dbConnection";
import Currency from "../models/currency";
import { AppError } from "../middleware/errorMiddleware";
import { CreateCurrencyDto } from "../dto/createCurrencyDto";
import { findCurrencyBySymbol } from "../database/queries/findCurrencyBySymbol";

export class CreateCurrency{

    async createCurrency(dto: CreateCurrencyDto) {
        let message = 'Couldnt create currency';
        let errorNumber = 500;
        try {
          await sequelize.sync();
          const existingCurrency = await findCurrencyBySymbol(dto.symbol);
          if (existingCurrency) {
            message = 'Currency already exists';
            errorNumber = 400;
          }
          const currency = await Currency.create({
            name: dto.name,
            symbol: dto.symbol,
            price_in_USD: dto.price_in_USD
          });
          return currency
        } catch (error) {
            throw new AppError(message, errorNumber);
        }
      }
}