import  Axios  from "axios";
import { AppError } from "../middleware/errorMiddleware";



export async function getCurrencyPriceBinance(symbol: string): Promise<number>{
    //https://api.binance.com/api/v3/ticker/price?symbol=EURUSDT
    //Ejemplo de un callback a la api de binance
    /*
    {
    "symbol": "EURUSDT",
    "price": "1.09430000"
    }
    */
    const url = process.env.BINANCE_API_URL +  symbol + process.env.BASE_CURRENCY;

    let price = 0;
    const response = await Axios.get(url).then(response =>{
        price = Number(response.data.price)
    }).catch(error =>{
        throw new AppError(`Error getting ${symbol} price`, 500)
    });
    return price
}

export async function getVESPrice(): Promise<number>{
    //https://ve.dolarapi.com/v1/dolares/oficial
    //Ejemplo de un callback a la api de para obtener el precio del dolar en bolivares
    /*
    {
    "fuente": "oficial",
    "nombre": "Oficial",
    "compra": null,
    "venta": null,
    "promedio": 37.07,
    "fechaActualizacion": "2024-10-10T12:00:40.391Z"
    }
    */

    const url = (process.env.VES_API_URL) as string
    let price = 0;
    const response = await Axios.get(url).then(response => {
        price = Number(response.data.promedio)
    }).catch(error =>{
        price = 100000
    });
    return price
}