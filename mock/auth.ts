import { MockMethod } from "vite-plugin-mock"
export default [
  {
    url: "/api/currentUser",
    method: "get",
    response: ({ headers }) => {
      const { token } = headers
      return {
        code: 0,
        data: token
      }
    }
  },
  {
    url: "/api/login",
    method: "post",
    response: ({ body }) => {
      //url body,query headers
      return {
        code: 0,
        data: `${body.username}-token`
      }
    }
  }
] as MockMethod[]
