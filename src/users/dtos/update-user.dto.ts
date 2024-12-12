export class UpdateUserDto {

    constructor(
        public name?: string,
        public email?: string,
        public password?: string,
        public photo?: string,
    ) { }

    static update( user: { [key:string]: any } ): [string?, UpdateUserDto?]  {
        const { name, email, password, photo } = user;

        if( name !== undefined ) {
            if(name.length === 0) return [ "Name is empty", undefined ];
        }

        if( email !== undefined ) {
            if( email.length === 0 ) return [ "Email is empty", undefined ]; 
        }

        if( password !== undefined ) {
            if( password.length < 4 ) return [ "Password to short", undefined ];
        }

        return [undefined , new UpdateUserDto( name, email, password, photo )  ];
    }
}

