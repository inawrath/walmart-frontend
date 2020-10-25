import React from "react"
import styled from "@emotion/styled"
import PriceProduct from "./price"


const Container = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  border: 1px solid rgba(128, 128, 128, .3);
  border-radius: 5px;
  padding: 7px;
  background-color: white;
  transition: box-shadow linear .05s;
  &:hover {
    box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, .2);
  }
`

const ContainerImage = styled.div``

const Image = styled.img`
  width: 200px;
`

const Brand = styled.div`
  font-size: 16px;
  font-weight: 600;
`

const Product = ({ product }: any) => (
  <Container>
    <ContainerImage>
      <Image src={`//${product.image}`} alt={product.brand} />
    </ContainerImage>
    <Brand>{product.brand}</Brand>
    <PriceProduct product={product} />
  </Container>
)

export default Product
