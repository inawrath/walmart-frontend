import { search } from "../search"

// @ts-ignore
import responsePage from "./response-page.json"



beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => { })
})

beforeEach(() => {
  // @ts-ignore
  fetch.resetMocks()

  process.env = {
    GATSBY_API_URL: undefined
  }
})

const setFakeEnvironment = () => {
  process.env = {
    GATSBY_API_URL: 'http://localhost:1234/search',
  }
}

const mockResponseOnce = (mock: any) => {
  // @ts-ignore
  fetch.mockResponseOnce(JSON.stringify(mock))
}

test("Test default call search api", async () => {
  setFakeEnvironment()

  mockResponseOnce(responsePage)

  const data = await search("")
  expect(data.products[5]).toEqual(responsePage.products[5])
})

test("Test call search api with error page", async () => {
  setFakeEnvironment()

  mockResponseOnce(responsePage)

  const data = await search("", 0)
  expect(data.products[5]).toEqual(responsePage.products[5])
})

test("Test call search api without environment api url", async () => {
  mockResponseOnce(responsePage)

  const data = await search("")
  expect(data.error).toBeTruthy
})

test("Test call search api with service down", async () => {
  setFakeEnvironment()

  // @ts-ignore
  fetch.mockReject(() => Promise.reject("API is down"))

  const data = await search("")
  expect(data.error).toBeTruthy
})
