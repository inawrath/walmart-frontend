import React from "react"
import { render } from "@testing-library/react"

import Layout from "../layout"

test("Layout with text", () => {
  const { getByText } = render(<Layout>Testing</Layout>)

  expect(getByText("Testing")).toContainHTML("<main>Testing</main>")
})
