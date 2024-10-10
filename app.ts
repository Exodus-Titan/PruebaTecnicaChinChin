import express from "express";
import dotenv from "dotenv";
import sequelize from "./src/database/dbConnection"
import { errorMiddleware } from "./src/middleware/errorMiddleware";
import { routerApi } from "./src/routers/routerIndex";



async function main() {

    const app = express();
    dotenv.config();
    app.use(express.json());
    app.use(errorMiddleware);
    routerApi(app);

    const port = process.env.PORT || 3000;

    app.listen(port, async () => {

      try{
        await sequelize.authenticate();
        await sequelize.sync();
      }
      catch(error){
        console.error('Couldnt connect to database:', error);
      }

      console.log(`Server is running on port ${port}`);
      });
}

main();