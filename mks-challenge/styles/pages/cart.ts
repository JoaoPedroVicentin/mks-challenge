import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const CartContent = styled(Dialog.Content)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;

    width: 25rem;

    background-color: ${props => props.theme.blue};

    padding: 1.5rem;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

    display: flex;
    flex-direction: column;

    section{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    @media (max-width: 420px) {
        width: 100%;
    }
`

export const CartHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 3rem;
`

export const CartTitle = styled.h2`
    font-size: 1.75rem;
    font-weight: 700;

    padding-right: 5rem;
    color: ${props => props.theme.white};
`

export const CartClose = styled(Dialog.Close)`
    background: none;
    border: none;
    border-radius: 50%;

    background-color: ${props => props.theme.black};
    color: ${props => props.theme.white};
    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`

export const CartProduct = styled.div`
    width: 100%;
    background-color: ${props => props.theme.white};
    padding: 1rem 0.5rem;
    border-radius: 8px;
    display: grid;
    grid-template-columns: 1fr 2fr 1.25fr 1.25fr;
    align-items: center;
    justify-content: center;
    
    gap: 1.25rem;
    align-items: center;
    position: relative;
`

export const CartProductImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CartProductName = styled.p`
    font-size: 0.85rem;
    font-weight: 400;
`

export const CartProductQuantity = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    p{
        font-size: 0.5rem;
        font-weight: 400;
        margin-bottom: 0.25rem;
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        border: 0.3px solid ${props => props.theme.gray300};
        border-radius: 4px;
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
        }
    }
`

export const CartProductPrice = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${props => props.theme.black};
    font-size: 1rem;
    font-weight: 700;
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

export const CartFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;

    div{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 1rem 2rem;

        p{
            font-size: 1.75rem;
            font-weight: 700;
            color: ${props => props.theme.white};
        }
    }

    button{
        border: none;
        background-color: ${props => props.theme.black};
        width: 100%;
        padding: 2rem 0;

        cursor: pointer;

        font-size: 1.75rem;
        font-weight: 700;
        color: ${props => props.theme.white};
    }
`