import { CardFooterButton, CardProductContainer, ProductInfos, ImageProductContainer } from "@/styles/pages/home";
import Image from "next/image";
import { ShoppingBag } from "phosphor-react";
import { priceFormatter } from "../utils/formatter";

interface ProductProps {
    name: string
    description: string
    photo: string
    price: number
}

export function CardProduct({ name, description, photo, price }: ProductProps) {
    return (
        <CardProductContainer>
            <ImageProductContainer>
                <Image src={photo} width={115} height={125} alt={name} />
            </ImageProductContainer>
            <ProductInfos>
                <div>
                    <h1>{name}</h1>
                    <span>{priceFormatter.format(price)}</span>
                </div>
                <p>{description}</p>
            </ProductInfos>
            <CardFooterButton>
                <ShoppingBag fontSize={18} weight='bold' />COMPRAR
            </CardFooterButton>
        </CardProductContainer>
    )
}