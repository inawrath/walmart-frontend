import React from "react"
import { render } from "@testing-library/react"
import Navbar from "../navbar"

test("Rendering Navbar", ()=>{
  const { getByText } = render(<Navbar></Navbar>)

  expect(getByText("Listado de productos")).toContainHTML("Listado de productos")
})
