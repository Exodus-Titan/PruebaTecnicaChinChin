import { CreateCurrencyDto } from "../dto/createCurrencyDto";
import { CreateCurrency } from "./createCurrency";


export async function createRequiredCurrencies() {
    const currencies: CreateCurrencyDto[] = [
      {
        name: "Bitcoin",
        symbol: "BTC",
        price_in_USD: 0
      },
      {
        name: "Ethereum",
        symbol: "ETH",
        price_in_USD: 0
      },
      {
        name: "Tether",
        symbol: "USDT",
        price_in_USD: 1
      },
      {
        name: "Binance Coin",
        symbol: "BNB",
        price_in_USD: 0
      },
      {
        name: "Bolivar",
        symbol: "VES",
        price_in_USD: 0
      },
      {
        name: "Euro",
        symbol: "EUR",
        price_in_USD: 0
      }
    ];
    
    for (const currency of currencies){
        const item =  await new CreateCurrency().createCurrency(currency);
    }
  }
