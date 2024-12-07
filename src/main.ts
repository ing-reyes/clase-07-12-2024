import { ProductsController } from "./products/products.controller";
import { ProductsService } from "./products/products.service";

(async () => {
    const productsService = new ProductsService()
    const productsController = new ProductsController(productsService);

    console.log( productsController.create() )
})()