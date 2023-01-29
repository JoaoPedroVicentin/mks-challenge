import { CartProductContainer, CartProductImage, CartProductName, CartProductPrice, CartProductQuantity, CartProductRemove } from "@/styles/pages/cartProduct"
import Image from "next/image"
import { Minus, Plus, X } from "phosphor-react"
import { useCart } from "../hooks/useCart"
import { priceFormatter } from "../utils/formatter"

interface CartProductProps {
    id: string
    name: string
    photo: string
    price: number
    quantity: number
}

export function CartProduct({ id, name, photo, quantity, price }: CartProductProps) {

    const { changeCartItemQuantity, removeCartItem } = useCart()

    function handleIncrease() {
        changeCartItemQuantity(id, 'increase')
    }

    function handleDecrease() {
        if (quantity > 1) {
            changeCartItemQuantity(id, 'decrease')
        }
    }

    function handleRemove() {
        removeCartItem(id)
    }

    return (
        <CartProductContainer>
            <CartProductImage>
                <Image width={50} height={50} src={photo} alt='' />
            </CartProductImage>

            <CartProductName>
                {name}
            </CartProductName>

            <CartProductQuantity>
                <p>Qtde</p>
                <div>
                    <button type="button" onClick={handleDecrease}><Minus size={10} weight='regular' /></button>
                    <span>{quantity}</span>
                    <button type="button" onClick={handleIncrease}><Plus size={10} weight='regular' /></button>
                </div>
            </CartProductQuantity>

            <CartProductPrice>
                {priceFormatter.format(price * quantity)}
            </CartProductPrice>

            <CartProductRemove onClick={handleRemove}>
                <X size={12} weight='bold' />
            </CartProductRemove>
        </CartProductContainer>
    )
}