import React from "react"
import styled from "@emotion/styled"

import { currencyNumber } from "../../helpers/currency"

const Price = styled.p`
  font-size: 14px;
  margin: 0 0 10px 0;
`

const ContainerPriceDiscount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const OriginalPrice = styled.p`
  text-decoration: line-through;
  font-size: 12px;
  margin: 0;
`

const Discount = styled.p`
  background-color: #ff0000;
  border-radius: 5px;
  color: #ffffff;
  padding: 5px 10px;
  font-size: 12px;
  margin: 0;
  margin-left: 5px;
`

const PriceProduct = ({
  product: {
    has_discount,
    price,
    price_discount,
  },
}: any) =>(
  <>
    <Price>$ {has_discount ? currencyNumber(price_discount) : currencyNumber(price)}</Price>
      {has_discount && (
        <ContainerPriceDiscount>
          <OriginalPrice>$ {currencyNumber(price)}</OriginalPrice>
          <Discount>50%</Discount>
        </ContainerPriceDiscount>
      )}
  </>
)

export default PriceProduct
