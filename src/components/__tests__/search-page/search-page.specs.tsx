import React from "react"
import { render } from "@testing-library/react"

import SearchPage from "../../search-page/search-page"

const product = {
  "id": 3000,
  "brand": "yooy eqrceli",
  "description": "xsjqn wpdqih",
  "image": "www.lider.cl/catalogo/images/computerIcon.svg",
  "price": 619402,
  "price_discount": 309701,
  "has_discount": true
}


test("Layout with text", () => {

  const { container, getByText } = render(<SearchPage />)
  // console.log(container.querySelector('body > div > div'))

})
