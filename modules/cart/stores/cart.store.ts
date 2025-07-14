"use client"


import { Product } from "@/modules/products/interfaces/product.interface";
import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

import { Cart } from "../interfaces/cart.interface";


interface StatesStore {
    // STATES
    cart: Cart[];
    total: number;

}


interface ActionsStore {
    // ACTIONS - METHODS
    addProductToCart: (product: Product) => void;
    incrementQuantity: (productId: number) => void; 
    decrementQuantity: (productId: number) => void; 
    calcTotal: () => void;
    removeToCart: (productId: number) => void; 
}



const storeApi: StateCreator<StatesStore & ActionsStore> = (set, get) => ({
    cart: [],
    total: 0,
    
    addProductToCart: (product: Product) => {
        const { cart } = get()
        
        const productInCart = cart.some((item) => item.productId === product.id)
    
        if( !productInCart ){
            set({
                cart: [
                    ...cart, 
                    { 
                        quantity: 1, 
                        productId: product.id, 
                        productPrice: product.price, 
                        productImage: product.image, 
                        productName: product.name  
                    }
                ]
            })
        }
        console.log(cart);    
    },

    incrementQuantity: (id: number) => {
        const { calcTotal, cart } = get();


        const updateCartProducts = cart.map(item => {
            if( item.productId === id ){
                return { ...item, quantity: item.quantity + 1 }
            }

            return item;
        })

        set({
            cart: updateCartProducts
        })

        calcTotal();

    },

    decrementQuantity: (id: number) => {
        const { calcTotal, cart } = get();


        const updateCartProducts = cart.map(item => {

            if( item.quantity === 1 ){
                return item;
            }

            if( item.productId === id ){
                return { ...item, quantity: item.quantity - 1 }
            }

            return item;
        })

        set({
            cart: updateCartProducts
        })

        calcTotal();
    },

    calcTotal: () => {
        const { cart } = get();

        let subTotal = 0;

        cart.forEach(item => {
            subTotal += +item.productPrice * item.quantity
        })

        set({
            total: subTotal
        })
    },

    removeToCart: (id: number) => {
        const { calcTotal, cart } = get();

        const updateCartProducts = cart.filter(item => item.productId !== id);


        set({
            cart: updateCartProducts
        })

        calcTotal();
    }

})



export const useCartStore = create<StatesStore & ActionsStore>()(
    persist(
        storeApi,
        { name: "789-cart-storage" }
    )
)