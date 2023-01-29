import { createContext, useState, ReactNode } from "react";
import { produce } from "immer";

export interface CartItem {
    id: string
    name: string
    description: string
    photo: string
    price: number
    quantity: number
}

interface CartContextType {
    cartItems: CartItem[]
    cartQuantity: number
    cartItemsTotal: number
    addProductToCart: (product: CartItem) => void
    changeCartItemQuantity: (cartItemId: string, type: 'increase' | 'decrease') => void
    removeCartItem: (cartItemId: string) => void
}

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {

    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const cartQuantity = cartItems.length

    const cartItemsTotal = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity
    }, 0)

    function addProductToCart(product: CartItem) {
        const productAlreadyExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === product.id)

        const newCart = produce(cartItems, (draft) => {
            if (productAlreadyExistsInCart < 0) {
                draft.push(product)
            } else {
                draft[productAlreadyExistsInCart].quantity += product.quantity
            }
        })

        setCartItems(newCart)
    }

    function changeCartItemQuantity(cartItemId: string, type: 'increase' | 'decrease') {
        const newCart = produce(cartItems, (draft) => {
            const productExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId
            )

            if (productExistsInCart >= 0) {
                const item = draft[productExistsInCart]
                draft[productExistsInCart].quantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1
            }
        })

        setCartItems(newCart)
    }

    function removeCartItem(cartItemId: string) {
        const newCart = produce(cartItems, (draft) => {
            const productExistsInCart = cartItems.findIndex(
                (cartItem) => cartItem.id === cartItemId
            )

            if(productExistsInCart >= 0) {
                draft.splice(productExistsInCart, 1)
            }
        })
        setCartItems(newCart)
    }

    console.log(cartItems)

    return (
        <CartContext.Provider value={{ cartItems, cartQuantity, cartItemsTotal, addProductToCart, changeCartItemQuantity, removeCartItem }}>
            {children}
        </CartContext.Provider>
    )
}