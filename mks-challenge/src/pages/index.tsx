import { HomeContainer } from "@/styles/pages/home";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { CardProduct } from "../components/CardProduct";
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
  return (
    <HomeContainer>
      {products.map(product => {
        return (
          <Link key={product.id} href={`/product/${product.id}`}>
            <CardProduct
              key={product.id}
              name={product.name}
              description={product.description}
              photo={product.photo}
              price={product.price} />
          </Link>
        )
      })}
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
