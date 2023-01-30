import { ProductSkeletonContainer, SkeletonItem } from "@/styles/pages/skeleton"
import { ComponentProps } from "react"

type ProductSkeletonProps = ComponentProps<typeof ProductSkeletonContainer>

export function ProductSkeleton({...props}: ProductSkeletonProps){
    return(
        <ProductSkeletonContainer {...props}>
            <SkeletonItem />
        </ProductSkeletonContainer>
    )
}