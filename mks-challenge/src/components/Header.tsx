import { ButtonCart, HeaderContainer, LogoTitle } from "@/styles/pages/app";
import { Minus, Plus, ShoppingCart, X } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'
import { CartClose, CartContent, CartFooter, CartHeader, CartProduct, CartProductImage, CartProductName, CartProductPrice, CartProductQuantity, CartProductRemove, CartTitle } from "@/styles/pages/cart";

import Clock from '../assets/apple-watch.svg'
import Image from "next/image";

export function Header() {
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
                        <span>0</span>
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
                            <CartProduct>
                                <CartProductImage>
                                    <Image src={Clock} alt='' />
                                </CartProductImage>

                                <CartProductName>
                                    Apple Watch Series 4 GPS
                                </CartProductName>

                                <CartProductQuantity>
                                    <p>Qtde</p>
                                    <div>
                                        <button><Plus size={10} weight='regular' /></button>
                                        <span>0</span>
                                        <button><Minus size={10} weight='regular' /></button>
                                    </div>
                                </CartProductQuantity>

                                <CartProductPrice>
                                    R$ 399
                                </CartProductPrice>

                                <CartProductRemove>
                                    <X size={12} weight='bold' />
                                </CartProductRemove>
                            </CartProduct>

                            <CartProduct>
                                <CartProductImage>
                                    <Image src={Clock} alt='' />
                                </CartProductImage>

                                <CartProductName>
                                    Apple Watch Series 4 GPS
                                </CartProductName>

                                <CartProductQuantity>
                                    <p>Qtde</p>
                                    <div>
                                        <button><Plus size={10} weight='regular' /></button>
                                        <span>0</span>
                                        <button><Minus size={10} weight='regular' /></button>
                                    </div>
                                </CartProductQuantity>

                                <CartProductPrice>
                                    R$ 399
                                </CartProductPrice>

                                <CartProductRemove>
                                    <X size={12} weight='bold' />
                                </CartProductRemove>
                            </CartProduct>

                            <CartProduct>
                                <CartProductImage>
                                    <Image src={Clock} alt='' />
                                </CartProductImage>

                                <CartProductName>
                                    Apple Watch Series 4 GPS
                                </CartProductName>

                                <CartProductQuantity>
                                    <p>Qtde</p>
                                    <div>
                                        <button><Plus size={10} weight='regular' /></button>
                                        <span>0</span>
                                        <button><Minus size={10} weight='regular' /></button>
                                    </div>
                                </CartProductQuantity>

                                <CartProductPrice>
                                    R$ 399
                                </CartProductPrice>

                                <CartProductRemove>
                                    <X size={12} weight='bold' />
                                </CartProductRemove>
                            </CartProduct>
                        </section>

                        <CartFooter>
                            <div>
                                <p>Total:</p>
                                <p>R$399</p>
                            </div>
                            <button>
                                Finalizar Compra
                            </button>
                        </CartFooter>
                    </CartContent>
                </Dialog.Portal>
            </Dialog.Root>
        </HeaderContainer>
    )
}