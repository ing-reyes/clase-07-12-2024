export class CreateProductDto {

    constructor(
        public name:string,
        public price:number,
        public stock:number,
        public photo?:string,
    ) { }

    static create( product: { [key:string]: any } ): [string?, CreateProductDto?]  {
        const { name, price, stock, photo } = product;

        if( !name ) return [ "Missing name", undefined ];
        
        if( !price ) return [ "Missing price", undefined ];
        if( isNaN( price ) ) return [ "Price must be number", undefined ];
        if( price < 0  ) return [ "Price must be a positive number", undefined ];
        
        if( !stock ) return [ "Missing password", undefined ];
        if( isNaN( stock ) ) return [ "Stock must be number", undefined ];
        if( stock < 0  ) return [ "Stock must be a positive number", undefined ];

        return [undefined , new CreateProductDto( name, price, stock, photo )  ];
    }
}

