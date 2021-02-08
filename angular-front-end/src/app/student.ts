export class Student
{
    constructor(
        id:number,
        name:string,
        classname:string,
        marks:string
    )
    {   
    }
    
}
export interface Content {
    id: number;
    name: string;
    classname: string;
    marks: string;
}

export interface Sort {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}

export interface Pageable {
    sort: Sort;
    offset: number;
    pageSize: number;
    pageNumber: number;
    unpaged: boolean;
    paged: boolean;
}

export interface Sort2 {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
}

export interface RootObject {
    content: Content[];
    pageable: Pageable;
    totalPages: number;
    totalElements: number;
    last: boolean;
    number: number;
    size: number;
    sort: Sort2;
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}

  