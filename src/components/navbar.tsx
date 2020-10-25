import React from "react"
import styled from "@emotion/styled"


const Nav = styled.nav`
  display: flex;
  background: #19191a;
  height: 80px;
  margin-bottom: 1.45rem;
  width: 100%;
  justify-content: center;
`

const Container = styled.ul`
  align-items: center;
  display: flex;
  height: 80px;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding-left: 0;
`

const SubHeader = styled.div`
  color: #000;
  font-size: 32px;
  line-height: 44px;
  font-weight: 600;
  text-align: center;
  font-family: "Open Sans";
`

const Separate = styled.div`
  border-top: 1px solid #d3d3d3;
  max-width: 1011px;
  margin: 30px auto;
`

type NavbarProps = {
  text?: string
}

const Navbar = ({ text }: NavbarProps) => (
  <div>
    <Nav>
      <Container>
      </Container>
    </Nav>
    <SubHeader>
      {text}
      <Separate />
    </SubHeader>
  </div>
)

Navbar.defaultProps = { text: "Listado de productos" }

export default Navbar
