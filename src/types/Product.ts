export interface Product{
    id: string;
    name: string;
    price: number;
    img: string;
    categoryName: string;
}

export interface ProductResponse{
    product: Product[];
}