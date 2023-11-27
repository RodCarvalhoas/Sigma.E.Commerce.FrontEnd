export interface Favorite{
    id: string;
    product: {
        name: string;
        price: number;
        img: string;
        categoryName: string;
        quantity: number;
    }
}

export interface Favorites{
    favorite: Favorite[];
}