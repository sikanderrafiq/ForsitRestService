import 'dotenv/config';
import  AppDataSource  from "./data-source"
import { createConnection, DataSource } from 'typeorm';
import InventoryController from './inventory/inventory.controller';
import App from './app';
import validateEnv from './utils/validateEnv';

validateEnv();

(async () => {
    try {
      const connection = await createConnection("postgresconnection");
      await connection.runMigrations();

      const app = new App(
            [
            new InventoryController(connection),
            ],
      );
      app.listen();
    } catch (error) {
      console.log('Error while connecting to the database: ', error);
      return error;
    }
})();
