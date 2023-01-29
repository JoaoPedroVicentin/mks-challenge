import { HomeContainer } from "@/styles/pages/home";
import { GetServerSideProps } from "next";
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
          <CardProduct
            key={product.id}
            name={product.name}
            description={product.description}
            photo={product.photo}
            price={product.price} />
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
    }
  }
}
