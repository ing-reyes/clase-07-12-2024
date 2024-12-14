export class PaginationDto{
    constructor(
        public page?:number,
        public limit?:number,
    ){}

    static create( pagination: { [key:string]:any } ):[string?, PaginationDto?]{
        const { page, limit } = pagination;

        if( page!==undefined ){
            if( isNaN(page) ) return ["Page must be a number"];
            if( page < 0 ) return ["Page must be a positive number"];
        }

        if( limit!==undefined ){
            if( isNaN(limit) ) return ["Limit must be a number"];
            if( limit < 0 ) return ["Limit must be a positive number"];
        }

        return [ undefined, new PaginationDto(page, limit) ];
    }
}