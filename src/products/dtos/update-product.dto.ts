export class UpdateProductDto {

    constructor(
        public name?:string,
        public price?:number,
        public stock?:number,
        public photo?:string,
    ) { }

    static update( product: { [key:string]: any } ): [string?, UpdateProductDto?]  {
        const { name, price, stock, photo } = product;

        if( name !== undefined ) {
            if( name.length === 0 ) return [ "Name is empty", undefined ];
        }
        
        if( price !== undefined ) {
            if( isNaN( price ) ) return [ "Price must be number", undefined ];
            if( price < 0  ) return [ "Price must be a positive number", undefined ];
        }
        
        if( stock !== undefined ) {
            if( isNaN( stock ) ) return [ "Stock must be number", undefined ];
            if( stock < 0  ) return [ "Stock must be a positive number", undefined ];
        }

        return [undefined , new UpdateProductDto( name, price, stock, photo )  ];
    }
}

