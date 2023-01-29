import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const CartContent = styled(Dialog.Content)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;

    width: 25rem;

    background-color: ${props => props.theme.blue};

    padding: 1.5rem 1.75rem;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);

    display: flex;
    flex-direction: column;

    section{
        display: flex;
        flex-direction: column;
        gap: 1.5rem;

        h2{
            font-size: 1rem;
            color: ${props => props.theme.white};
        }
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
    font-size: 1.5rem;
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
            font-size: 1.5rem;
            font-weight: 700;
            color: ${props => props.theme.white};
        }
    }

    button{
        border: none;
        background-color: ${props => props.theme.black};
        width: 100%;
        padding: 1rem 0;

        cursor: pointer;

        font-size: 1.5rem;
        font-weight: 700;
        color: ${props => props.theme.white};

        :hover{
            opacity: 0.9;
        }

        &:disabled {
            opacity: 0.7;
            cursor: not-allowed;
        }
    }
`