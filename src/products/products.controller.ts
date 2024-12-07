import { CreateProductDto } from "./dtos/create-product.dto"
import { ProductsService } from './products.service';

export class ProductsController {

    constructor(
        private readonly productsService: ProductsService, 
    ){}

    create = () => {
        const product: CreateProductDto = {
            name: "calzado1",
            price: 10,
            stock: 3,
        }

        this.productsService.create( product )
            .then((product)=>console.log(product))
            .catch((err)=> console.error(err));

    }
}