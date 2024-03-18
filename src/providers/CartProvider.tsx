import { CartItem, Product } from "@/types";
import { PropsWithChildren, createContext, useContext, useState} from "react";

type CartType = {
    items: CartItem[],
    addItem: (product: Product, size: CartItem['size']) => void,
};

const CartContex = createContext<CartType>({
    items: [],
    addItem: () => {},
});

const CartProvider = ({children}: PropsWithChildren) => {
    const [items, setItems]= useState<CartItem[]>([]);
    const addItem = (product: Product, size: CartItem['size']) => {
        // if alread in cart, increment quantity
        const newCartItem: CartItem = {
            id: '1', // generate
            product,
            product_id: product.id,
            size,
            quantity: 1,
        }

        setItems([newCartItem, ...items]);
    };
    
    // updateQuantity

    return (
        <CartContex.Provider value = {{items, addItem}}>
            {children}
        </CartContex.Provider>
    );
};


export default CartProvider;

export const useCart = () => useContext(CartContex);