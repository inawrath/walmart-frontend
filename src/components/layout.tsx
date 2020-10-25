import React from "react"
import styled from "@emotion/styled"

import "./layout.css"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e5e5e5;
`

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Container>
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Layout
