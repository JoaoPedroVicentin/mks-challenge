import { api } from "@/src/lib/axios"
import { ImageContainer, ProductButton, ProductContainer, ProductDescription, ProductDetails, ProductName, ProductPrice } from "@/styles/pages/product"
import { GetStaticProps } from "next"
import { useRouter } from "next/router"

export default function Product() {

    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>

            </ImageContainer>

            <ProductDetails>
                <ProductName>Camiseta X</ProductName>
                <ProductPrice>R$ 79,90</ProductPrice>

                <ProductDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed illo asperiores consequuntur? Reiciendis odit eveniet voluptas quia, ipsa vel minus laudantium. Laboriosam laborum atque in earum pariatur eveniet recusandae sequi.</ProductDescription>
            
                <ProductButton>
                    Comprar agora
                </ProductButton>
            </ProductDetails>
        </ProductContainer>
    )
}