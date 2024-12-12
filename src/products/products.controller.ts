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
        };

        this.productsService.create( product )
            .then((product)=>console.log(product))
            .catch((error)=> console.error({statusCode: error.statusCode, message: error.message}));

    }

    findAll = () => {

        this.productsService.findAll( )
            .then((products)=>console.log(products))
            .catch((error)=> console.error({statusCode: error.statusCode, message: error.message}));
    }

    findOne = () => {
        const id = "2";
        this.productsService.findOne( id )
            .then((products)=>console.log(products))
            .catch((error)=> console.error({statusCode: error.statusCode, message: error.message}));
    }

    update = () => {
        const id = "2";
        const product = {
            name: "new name"
        };
        this.productsService.update( id, product )
            .then((product)=>console.log(product))
            .catch((error)=> console.error({statusCode: error.statusCode, message: error.message}));
    }

    remove = () => {
        const id = "2";
        this.productsService.remove( id )
            .then((product)=>console.log(product))
            .catch((error)=> console.error({statusCode: error.statusCode, message: error.message}));
    }
}