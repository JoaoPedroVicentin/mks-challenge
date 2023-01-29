import styled from "styled-components"

export const ProductContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: stretch;
  gap: 4rem;
  padding: 4rem;

  max-width: 1440px;
  margin: 0 auto;
`

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 576px;
  height: 450px;
  background-color: ${props => props.theme.white};
  border-radius: 8px;
  padding: 0.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img: {
    object-fit: 'cover';
  }

`

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductName = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme.gray500};
`

export const ProductPrice = styled.span`
  margin-top: 1rem;
  display: block;
  font-size: 1.5rem;
  color: ${props => props.theme.gray900};
`

export const ProductDescription = styled.p`
  margin-top: 2.5rem;
  font-size: 1rem;
  line-height: 25px;
  color: ${props => props.theme.gray500};
`

export const ProductButton = styled.button`
  margin-top: auto;
  background-color: ${props => props.theme.blue};
  border: none;
  color: ${props => props.theme.white};
  border-radius: 8px;
  padding: 1.25rem;
  font-weight: 600;

  &:hover{
    background-color: ${props => props.theme.blueHover};
  }
`