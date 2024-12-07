import { UserEntity } from "../entities/user.entity";

export interface ResponseAllUsers { 
    total: number, 
    data: UserEntity[] 
}