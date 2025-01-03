import axios, { AxiosInstance } from 'axios'

class AxiosClient {
  private client: AxiosInstance

  constructor(baseURL: string) {
    this.client = axios.create({
      baseURL,
      timeout: 5000,
    })
  }

  public getClient(): AxiosInstance {
    return this.client
  }
}

export default AxiosClient
