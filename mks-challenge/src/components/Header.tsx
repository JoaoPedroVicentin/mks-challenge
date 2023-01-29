import { ButtonCart, HeaderContainer, LogoTitle } from "@/styles/pages/app";
import { ShoppingCart, X } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'
import { useCart } from "../hooks/useCart";
import {
    CartClose,
    CartContent,
    CartFooter,
    CartHeader,
    CartTitle
} from "@/styles/pages/cart";
import { CartProduct } from "./CartProduct";
import { priceFormatter } from "../utils/formatter";

export function Header() {

    const { cartQuantity, cartItems, cartItemsTotal } = useCart()

    return (
        <HeaderContainer>
            <LogoTitle>
                <h1>MKS</h1>
                <p>Sistemas</p>
            </LogoTitle>

            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <ButtonCart>
                        <ShoppingCart size={16} weight='bold' />
                        <span>{cartQuantity}</span>
                    </ButtonCart>
                </Dialog.Trigger>

                <Dialog.Portal>
                    <CartContent>
                        <CartHeader>
                            <CartTitle>Carrinho de compras</CartTitle>

                            <CartClose>
                                <X size={18} weight='bold' />
                            </CartClose>
                        </CartHeader>

                        <section>
                            {cartItems.length <= 0 ? <h2>Parece que seu carrinho está vazio !</h2> : 
                                cartItems.map(item => (
                                    <CartProduct key={item.id}
                                        id={item.id} name={item.name}
                                        price={item.price}
                                        photo={item.photo}
                                        quantity={item.quantity} />
                                ))
                            }
                        </section>

                        <CartFooter>
                            <div>
                                <p>Total:</p>
                                <p>{priceFormatter.format(cartItemsTotal)}</p>
                            </div>
                            <button disabled={cartItems.length === 0}>
                                Finalizar Compra
                            </button>
                        </CartFooter>
                    </CartContent>
                </Dialog.Portal>
            </Dialog.Root>
        </HeaderContainer>
    )
}