import React, { useEffect, useState } from "react"
import styled from "@emotion/styled"
import Pagination from "react-js-pagination"

import Layout from "../layout"
import Navbar from "../navbar"

import { search } from "../../services/search"
import Product from "./product"

const WrapperSearch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ProductsContainer = styled.div`
  max-width: 1195px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 20px;
`

const WrapperInput = styled.div`
  position: relative;
  display: flex;
  min-width: 100px;
`

const SearchIcon = styled.img`
  position: absolute;
  top: 6px;
  left: 8px;
  width: 14px;
`

const ClearIcon = styled.img`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 10px;
  cursor: pointer;
  &.clear {
    visibility: hidden;
  }
`

const SearchInput = styled.input`
  border: 1px solid grey;
  border-radius: 5px;
  height: 20px;
  width: 100%;
  padding: 2px 23px 2px 30px;
  outline: 0;
  background-color: #f5f5f5;
  &:hover, &:focus {
    border: 1px solid #009688;
    background-color: white;
  }
`

const ContainerPagination = styled.div`
  * {
    text-decoration: none;
  }

  ul {
    list-style: none;
    display: flex;
  }
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-width: 40px;
    min-height: 40px;
    cursor: pointer;
    border: 1px solid rgba(128, 128, 128, .2);
    border-radius: 5px;
    justify-content: center;
    margin: 0 3px;

    > a {
      color: black;
    }
    &.active {
      background-color: rgba(0, 113, 206, .5);
    }
    &.disabled {
      cursor: not-allowed;
    }
    &.disabled a {
      cursor: not-allowed;
    }
  }

`

const renderProducts = (products: any) => {
  if (products && products.length){
    return products.map((product: any, idx: number) => <Product key={idx} product={product}/>)
  }
  return <div>No hay resultados</div>
}

const SearchPage = () => {
  const [dataSearch, setDataSearch] = useState<any>({total: 0})
  const [textSearch, setTextSearch] = useState("")
  const [page, setPage] = useState(1)

  useEffect(() => {
    const callSearch = async () => {
      const data = await search(textSearch, page)
      setDataSearch(data)
    }

    let idTimeout: any = 0

    idTimeout = setTimeout(() => {
      callSearch()
    }, 250);

    return () => clearTimeout(idTimeout)

  }, [textSearch, page])

  const handleChange = (event: any) => setTextSearch(event.target.value)

  const clearInputSearch = () => setTextSearch("")

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber)
  }

  return (
    <Layout>
      <Navbar />
      <WrapperSearch>
        <WrapperInput>
          <SearchIcon
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
          />
          <SearchInput
            placeholder="Buscar producto"
            type="text"
            value={textSearch}
            onChange={handleChange}
          />
          <ClearIcon
            className={textSearch === "" ? 'clear' : ''}
            onClick={clearInputSearch}
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
          />
        </WrapperInput>
        {isNaN(parseInt(textSearch)) && textSearch.length > 3 && (<div>Total de productos encontrados: {dataSearch.total}</div>)}

        <ProductsContainer>
          {renderProducts(dataSearch.products)}
        </ProductsContainer>
        <ContainerPagination>
          {!dataSearch.error && (<Pagination
            activePage={page}
            itemsCountPerPage={12}
            totalItemsCount={dataSearch.total}
            pageRangeDisplayed={3}
            onChange={handlePageChange}
          />)}
        </ContainerPagination>
      </WrapperSearch>
    </Layout>
  )
}

export default SearchPage
