import styled from "styled-components";

export const HomeContainer = styled.main`
    max-width: 1440px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
    padding: 5rem 10rem;
    gap: 2rem;

    @media (max-width: 1080px) {
        grid-template-columns: 1fr 1fr 1fr;
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 580px) {
        grid-template-columns: 1fr;
    }
`

export const CardProductContainer = styled.div`
    background-color: ${props => props.theme.white};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    width: 14rem;
    height: 20rem;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ImageProductContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;
`

export const ProductInfos = styled.div`
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    div{
        display: flex;
        gap: 0.5rem;
        justify-content: space-between;

        span{
            background-color: ${props => props.theme.gray900};
            color: ${props => props.theme.white};
            border-radius: 5px;

            height: 1.75rem;
            padding: 0 0.5rem;

            font-weight: 700;

            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    h1{
        font-size: 1rem;
        font-weight: 400;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    p{
        font-size: 0.725rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
`

export const CardFooterButton = styled.button`
    width: 100%;
    background-color: ${props => props.theme.blue};
    color: ${props => props.theme.white};

    border: none;
    border-radius: 0 0 8px 8px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    padding: 0.5rem;

    font-size: 0.875rem;
    font-weight: 600;

    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme.blueHover};
    }
`