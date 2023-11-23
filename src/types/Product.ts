export interface Product{
    id: string;
    name: string;
    price: number;
    img: string;
    categoryName: string;
    quantity: number;
}

export interface ProductResponse{
    product: Product[];
}