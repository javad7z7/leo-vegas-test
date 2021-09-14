import axios from 'axios'

let Request

if (axios.defaults) {
  Request = axios.create()

  Request.interceptors.request.use(
    async (config) => {
      config.headers.Authorization =
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NzE0NDdhNzMwNTE2NmMzZmEyM2NmYzFkMjUzYzcxZSIsInN1YiI6IjYxM2Y1M2Y5ZTI3MjYwMDAyYTljNWIzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WVGAsZrtdmGtlkxIAKElzTHp_8UpUcMayRcvyxQhu6A'

      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
} else Request = axios

export { Request }
