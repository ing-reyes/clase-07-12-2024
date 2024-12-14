import { PaginationDto } from "../common/dtos/pagination/pagination.dto"
import { ManagerError } from "../common/errors/manager.error"
import { CreateUserDto } from "./dtos/create-user.dto"
import { UpdateUserDto } from "./dtos/update-user.dto"
import { UsersServices } from "./users.service"

export class UsersController {
  constructor(
    private readonly usersService: UsersServices = new UsersServices(),
  ) { }

  create = () => {
    const user = {
      name: "fermin",
      email: "fermin@google.com",
      //password: "1233245345",
      photo: "photo1.jpg",
    }

    const [error, createUserDto] = CreateUserDto.create(user);
    if (error) throw ManagerError.badRequest(error);

    this.usersService.create(createUserDto!)
      .then((user) => console.log(user))
      .catch((error) => console.error({ statusCode: error.statusCode, message: error.message, type: error.type }))
  }

  findAll = () => {
    const [error, paginationDto] = PaginationDto.create({ page: 1, limit: 10 });
    if (error) throw error;
    this.usersService.findAll(paginationDto!)
      .then((users) => console.log(users))
      .catch((error) => console.log({ statusCode: error.statusCode, message: error.message, type: error.type }))
  }

  findOne = (id: string) => {

    this.usersService.findOne(id)
      .then((user) => console.log(user))
      .catch((error) => console.log({ statusCode: error.statusCode, message: error.message, type: error.type }))
  }

  update = () => {
    const id = "2";
    const data: UpdateUserDto = {
      name: "jose gregorio",
    };

    this.usersService.update(id, data)
      .then((user) => console.log(user))
      .catch((error) => console.log({ statusCode: error.statusCode, message: error.message, type: error.type }))
  }

  remove = () => {
    const id = "2";

    this.usersService.remove(id)
      .then((user) => console.log(user))
      .catch((error) => console.log({ statusCode: error.statusCode, message: error.message, type: error.type }));
  }
}