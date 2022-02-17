export interface IProduct {
    id: string,
    name: string,
    price: number
};

export interface PState {
    products: IProduct[],
    loading: boolean,
    error: null
};

export interface ICart extends IProduct {
    quantity: number,
};

export interface CState {
    products: ICart[],
    totalPrice: number
};





