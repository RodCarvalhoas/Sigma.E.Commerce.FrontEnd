export interface Favorite{
    id: string;
    product: {
        id: string;
        name: string;
        price: number;
        img: string;
        categoryName: string;
        quantity: number;
    }
}