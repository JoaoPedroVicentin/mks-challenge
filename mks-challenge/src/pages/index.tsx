import { HomeContainer } from "@/styles/pages/home";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CardProduct } from "../components/CardProduct";
import { ProductSkeleton } from "../components/ProductSkeleton";
import { api } from "../lib/axios";

interface ProductProps {
  products: {
    id: string
    name: string
    description: string
    photo: string
    price: number
  }[]
}


export default function Home({ products }: ProductProps) {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeOut = setTimeout(() => setIsLoading(false), 2000)

    return () => clearTimeout(timeOut)
  }, [])

  return (
    <HomeContainer>
      {isLoading ? 
      <>
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton />
      </> :
        <>
          {
            products.map(product => {
              return (
                <CardProduct
                  key={product.id}
                  product={product} />
              )
            })
          }
        </>
      }
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const response = await api.get('products?page=1&rows=8&sortBy=id&orderBy=DESC')

  const products = response.data.products

  return {
    props: {
      products
    },
  }
}
