import { ManagerError } from "../common/errors/manager.error"
import { CreateUserDto } from "./dtos/create-user.dto"
import { CreateUser, UpdateUser } from "./types/users.type"
import { UsersServices } from "./users.service"

export class UsersController {
    constructor(
        private readonly usersService: UsersServices = new UsersServices(),
    ) { }

    create = () => {
        const user = {
            name: "fermin",
            email: "fermin@google.com",
            password: "1233245345",
            photo: "photo1.jpg",
        }

        const [ error,  createUserDto] = CreateUserDto.create( user )
        if( error ) throw ManagerError.badRequest(error);

        this.usersService.create( createUserDto! )
          .then((user)=>console.log(user))
          .catch((err)=>console.error(err))
    }

    findAll = () => {
      this.usersService.findAll()
        .then((users)=>console.log(users))
        .catch((error)=>console.log(error))
    }

    findOne = (id:string) => {

      this.usersService.findOne(id)
        .then((user)=>console.log(user))
        .catch((error)=>console.log(error))
    }

    update = () => {
      const id = "2";
      const data:UpdateUser = {
        name: "jose gregorio",
      };

      this.usersService.update(id, data)
        .then((user)=>console.log(user))
        .catch((error)=>console.log(error))
    }

    remove = () => {
      const id = "2";

      this.usersService.remove(id)
        .then((user)=>console.log(user))
        .catch((error)=>console.log(error));
    }
}