import styled, { keyframes } from "styled-components";

const skeletonAnimation = keyframes`
    0%{
        background-position: -400px 0;
    }

    100%{
        background-position: calc(400px + 100%) 0;
    }
`

export const ProductSkeletonContainer = styled.div`
    width: 100%;
    height: 250px;

    display: grid;
`

export const SkeletonItem = styled.div`
    animation: ${skeletonAnimation} 2000ms ease-in-out infinite;
    background-color: ${props => props.theme.gray100};
    background-image: linear-gradient(90deg, #e5e5e5, #dbdbdb, #e5e5e5);
    background-size: 400px 100%;
    background-repeat: no-repeat;

    width: 100%;
    height: 100%;

    border-radius: 8px;
`