import { currencyNumber } from "../currency"

test("Valid number", () => {
  expect(currencyNumber(123456)).toEqual("123.456")
})

test("Invalid number", () => {
  expect(currencyNumber("String invalid")).toEqual("String invalid")
})
