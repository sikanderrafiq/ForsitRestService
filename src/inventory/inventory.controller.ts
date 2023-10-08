import * as express from 'express';
import { getRepository, AdvancedConsoleLogger, DataSource } from 'typeorm';
import Controller from '../interfaces/controller.interface';
import validationMiddleware from '../middleware/validation.middleware';
import CreateInventoryDto from './inventory.dto';
import Product from '../entity/product.entity';

class InventoryController implements Controller {
  public path = '/inventory';
  public router = express.Router();
  private inventoryRepository;

  constructor(connection: DataSource) {
    this.inventoryRepository = connection.getRepository(Product);
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(this.path, this.getAllProducts);
    this.router.post(this.path, validationMiddleware(CreateInventoryDto), this.createIventory);
  }

  private getAllProducts = async (request: express.Request, response: express.Response) => {
    const products = await this.inventoryRepository.find();
    response.send(products);
  }

  private createIventory = async (request: express.Request, response: express.Response) => {
    const data: CreateInventoryDto = request.body;
    const newProduct: Product = this.inventoryRepository.create({
      ...data
    });
    console.log("createIventory:--------------newProduct=", newProduct);
    await this.inventoryRepository.save(newProduct);
    response.send(newProduct);
  }

}

export default InventoryController;
