export class ProductEntity {
    id!:string;
    name!:string;
    price!:number;
    stock!:number;
    createdAt!:Date;
    updatedAt!:Date;
    photo?:string;
}