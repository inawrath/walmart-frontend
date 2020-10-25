import React from "react"
import styled from "@emotion/styled"

import SEO from "../components/seo"
import Layout from "../components/layout"

const Message = styled.div`
  padding: 0 1rem;
`

const Title = styled.h2`
  text-align: center;
  font-size: 2.4375em;
  font-weight: bold;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="¡UPS! No hay nada por acá" />

    <Message>
      <Title>¡UPS! No hay nada por acá</Title>
    </Message>
  </Layout>
)

export default NotFoundPage
