import { CardFooterButton, CardProductContainer, ProductInfos, ImageProductContainer } from "@/styles/pages/home";
import Image from "next/image";
import { ShoppingBag } from "phosphor-react";
import { useCart } from "../hooks/useCart";
import { priceFormatter } from "../utils/formatter";

interface Product {
    id: string
    name: string
    description: string
    photo: string
    price: number
}

interface ProductProps{
    product: Product
}

export function CardProduct({ product }: ProductProps) {

    const { addProductToCart } = useCart()

    function handleAddToCart(){
        const productToAdd = {
            ...product,
            quantity: 1
        }
        addProductToCart(productToAdd)
    }

    return (
        <CardProductContainer>
            <ImageProductContainer>
                <Image src={product.photo} width={115} height={125} alt={product.name} />
            </ImageProductContainer>
            <ProductInfos>
                <div>
                    <h1>{product.name}</h1>
                    <span>{priceFormatter.format(product.price)}</span>
                </div>
                <p>{product.description}</p>
            </ProductInfos>
            <CardFooterButton onClick={handleAddToCart} >
                <ShoppingBag fontSize={18} weight='bold' />
                COMPRAR
            </CardFooterButton>
        </CardProductContainer>
    )
}