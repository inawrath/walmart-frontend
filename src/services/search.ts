const search = async (text: string, page: number = 1) => {
  let data: any = {
    total: 0,
  }

  if (isNaN(page) || page < 1) {
    page = 1
  }

  try {
    if (process.env.GATSBY_API_URL === undefined) {
      data.error = true
      console.error("Falta configurar endpoint de busqueda")
    } else {
      const response = await fetch(`${process.env.GATSBY_API_URL}?text=${text}&page=${page}`, {
        credentials: "omit",
      })

      data = await response.json()
    }
  } catch (err) {
    console.error(err)
    data.error = true
  }

  return data
}

export { search }
