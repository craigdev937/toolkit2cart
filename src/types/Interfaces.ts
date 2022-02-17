export interface IProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,    
    image: string,
    rating: {
        rate: number,
        count: number
    }
};

export interface PState {
    products: IProduct[],
    loading: boolean,
    error: string | null
};

export interface ICart extends IProduct {
    quantity: number,
};

export interface CState {
    products: ICart[],
    totalPrice: number
};





