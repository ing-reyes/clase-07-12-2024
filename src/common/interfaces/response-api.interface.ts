import { HttpStatus } from "../enums/http-status.enum";

export interface Status{
    statusMsg: keyof typeof HttpStatus,
    statusCode: HttpStatus,
    error:string | null,
} 
export interface Metadata{
    total:number,
    page:number,
    limit:number,
    lastPage:number,
}

export interface ResponseAllApi<T>{
    status: Status,
    meta: Metadata,
    data: T[];
}

export interface ResponseOneApi<T>{
    status: Status,
    data: T;
}