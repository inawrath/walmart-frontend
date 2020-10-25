import React from "react"
import { render } from "@testing-library/react"

import Product from "../../search-page/product"

const product = {
  "id": 3000,
  "brand": "yooy eqrceli",
  "description": "xsjqn wpdqih",
  "image": "www.lider.cl/catalogo/images/computerIcon.svg",
  "price": 619402,
  "price_discount": 309701,
  "has_discount": true
}


test("Render product", () => {
  const { container } = render(<Product product={product}/>)

  const img = container.querySelector('div > div > img')

  if (img !== null) {
    expect(img.getAttribute('src')).toEqual(`//${product.image}`)
  }

})
