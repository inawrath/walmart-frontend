const currencyNumber = (money: any) => {
  if (!isNaN(money)) {
    return money.toLocaleString('de').replace(/,/g, '.')
  }

  return money
}

export { currencyNumber }
