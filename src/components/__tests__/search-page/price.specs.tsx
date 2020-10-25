import React from "react"
import { render } from "@testing-library/react"

import PriceProduct from "../../search-page/price"
import { currencyNumber } from "../../../helpers/currency"

const product = {
  "id": 3000,
  "brand": "yooy eqrceli",
  "description": "xsjqn wpdqih",
  "image": "www.lider.cl/catalogo/images/computerIcon.svg",
  "price": 619402,
  "price_discount": 309701,
  "has_discount": true
}


test("Price product with discount", () => {
  const { container } = render(<PriceProduct product={product}/>)

  expect(container.querySelector('body > div > p')).toHaveTextContent(`$ ${currencyNumber(product.price_discount)}`)
  expect(container.querySelector('body > div > div > p')).toHaveTextContent(`$ ${currencyNumber(product.price)}`)
})

test("Price product without discount", () => {
  const { container } = render(<PriceProduct product={{ ...product, has_discount: false }}/>)

  expect(container.querySelector('body > div > p')).toHaveTextContent(`$ ${currencyNumber(product.price)}`)
})
