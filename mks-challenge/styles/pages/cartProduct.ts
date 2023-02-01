import styled from "styled-components"

export const CartProductContainer = styled.div`
    width: 100%;
    background-color: ${props => props.theme.white};
    padding: 1rem 0.5rem;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr;
    align-items: center;
    justify-content: center;
    
    gap: 1.25rem;
    align-items: center;
    position: relative;

    @media (max-width: 420px) {
        grid-template-columns: 1fr;
    }

    div{
        display: flex;
        align-items: center;
        gap: 0 2rem;

        @media (max-width: 420px) {
            justify-content: center;
            gap: 1rem;
        }
       
    }
`

export const CartProductImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 420px) {
        img{
            width: 65%;
            height: 18vh;
        }
    }
`

export const CartProductName = styled.p`
    font-size: 0.85rem;
    font-weight: 400;

    @media (max-width: 420px) {
        margin: 0 auto;
        font-size: 1rem;
    }
`

export const CartProductQuantity = styled.div`
    display: flex;
    flex-direction: column;

    p{
        font-size: 0.5rem;
        font-weight: 400;
        margin-bottom: 0.25rem;

        @media (max-width: 420px) {
            display: none;
        }
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        border: 0.3px solid ${props => props.theme.gray300};
        border-radius: 4px;
        width: 5rem;
        padding: 0.25rem 0.5rem;

        button{
            display: flex;
            align-items: center;
            justify-content: center;

            background: none;
            border: none;
            cursor: pointer;

            color: ${props => props.theme.black};
        }

        span{
            font-size: 0.75rem;
            font-weight: 400;

            border-left: 1px solid ${props => props.theme.gray300};
            border-right: 1px solid ${props => props.theme.gray300};

            color: ${props => props.theme.black};

            padding: 0 0.25rem;

            @media (max-width: 580px) {
                font-size: 1.15rem;
                padding: 0 0.75rem;
            }
        }

        @media (max-width: 580px) {
            width: 6rem;
        }
    }
`

export const CartProductPrice = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;

    color: ${props => props.theme.black};
    font-size: 1rem;
    font-weight: 700;

    @media (max-width: 420px) {
        background-color: ${props => props.theme.gray900};
        color: ${props => props.theme.white};
        border-radius: 5px;
        padding: 0.5rem 1rem;
        width: 6rem;
    }
`

export const CartProductRemove = styled.button`
    width: 1.55rem;
    height: 1.55rem;
    position: absolute;
    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);

    display: flex;
    align-items: center;
    justify-content: center;

    background: none;
    border: none;
    border-radius: 50%;

    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};
    cursor: pointer;
`