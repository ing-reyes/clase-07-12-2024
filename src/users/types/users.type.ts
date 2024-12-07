export type CreateUser = {
    name: string;
    email: string;
    password: string;
    photo?: string;
}

export type UpdateUser = {
    name?: string;
    email?: string;
    password?: string;
    photo?: string;
}
