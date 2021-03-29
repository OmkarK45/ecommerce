import axios from "axios"

class AxiosService {
  constructor() {
    const instance = axios.create()
    instance.interceptors.response.use(this.handleSuccess, this.handleError)
  }
  handleSuccess(response) {
    return response
  }
  handleError(error) {
    switch (error.response.status) {
      case 401:
        this.redirectTo(document, "/")
        break
      case 404:
        this.redirectTo(document, "/404")
        break
      default:
        this.redirectTo(document, "/500")
        break
    }
    return Promise.reject(error)
  }

  redirectTo = (document, path) => {
    document.location = path
  }

  get(url) {
    return this.instance.get(url)
  }
  post(url, body) {
    return this.instance.post(url, body)
  }
  patch(url, body) {
    return this.instance.patch(url, body)
  }
  delete(url, body) {
    return this.instance.delete(url, body)
  }
}

export default new AxiosService()
