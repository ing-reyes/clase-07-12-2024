export class CreateCategoryDto {

    constructor(
        public name:string,
        public description?:string,
    ) { }

    static create( product: { [key:string]: any } ): [string?, CreateCategoryDto?]  {
        const { name, description } = product;

        if( !name ) return [ "Missing name", undefined ];
        

        return [undefined , new CreateCategoryDto( name, description )  ];
    }
}

