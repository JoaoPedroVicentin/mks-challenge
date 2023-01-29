import { ButtonCart, HeaderContainer, LogoTitle } from "@/styles/pages/app";
import { ShoppingCart } from "phosphor-react";


export function Header() {
    return (
        <HeaderContainer>
            <LogoTitle>
                <h1>MKS</h1>
                <p>Sistemas</p>
            </LogoTitle>

            <ButtonCart>
                <ShoppingCart size={18} weight='bold' />
                <span>0</span>
            </ButtonCart>
        </HeaderContainer>
    )
}