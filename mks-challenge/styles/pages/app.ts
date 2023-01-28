import styled from "styled-components";

export const Container = styled.div`
    max-width: 1440px;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 0 auto;
`

export const HeaderContainer = styled.header`
    width: 100%;
    background-color: ${props => props.theme.blue};
    color: ${props => props.theme.white};

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 0.5rem;
    padding: 2rem 4rem;
    margin: 0 auto;
`

export const LogoTitle = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;

    h1{
      margin-bottom: -0.25rem;
    }
`

export const ButtonCart = styled.div`
    background-color: ${props => props.theme.white};
    color: ${props => props.theme.black};

    width: 5.625rem;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
    padding: 0.5rem 0;
    border-radius: 8px;

    span{
        font-size: 1.1rem;
        font-weight: 600;
    }
`

export const FooterContainer = styled.footer`
    background-color: ${props => props.theme.gray100};
    color: ${props => props.theme.black};

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem 0;

    p {
        font-weight: 400;
    }
`