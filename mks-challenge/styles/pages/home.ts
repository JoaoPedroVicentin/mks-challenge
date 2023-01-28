import styled from "styled-components";

export const HomeContainer = styled.body`
    display: grid;
    align-items: center;
    justify-content: center;
`

export const CardButtonContainer = styled.div`
    background-color: ${props => props.theme.white};
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    border-radius: 8px;
    width: 10rem;
    height: 10rem;
`