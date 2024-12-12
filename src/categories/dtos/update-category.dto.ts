export class UpdateCategoryDto {

    constructor(
        public name?:string,
        public description?:string,
    ) { }

    static update( product: { [key:string]: any } ): [string?, UpdateCategoryDto?]  {
        const { name, description } = product;

        if( name !== undefined ) {
            if( name.length === 0 ) return [ "Name is empty", undefined ];
        }

        if( description !== undefined ) {
            if(description.length === 0) return [ "Description is empty", undefined ];
        }

        return [undefined, new UpdateCategoryDto( name, description )  ];
    }
}

