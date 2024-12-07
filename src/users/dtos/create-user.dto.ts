export class CreateUserDto {

    constructor(
        public name: string,
        public email: string,
        public password: string,
        public photo?: string,
    ) { }

    static create( user: { [key:string]: any } ): [string?, CreateUserDto?]  {
        const { name, email, password, photo } = user;

        if( !name ) return [ "Missing name", undefined ];
        if( !email ) return [ "Missing email", undefined ];
        if( !password ) return [ "Missing password", undefined ];
        if( password.length < 4 ) return [ "Password to short", undefined ];


        return [undefined , new CreateUserDto( name, email, password, photo )  ];
    }
}

