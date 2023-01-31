import { type HttpRequest, type HttpResponse } from './http'

export interface Controller {
  async handle: (httpRequest: HttpRequest) => Promise<HttpResponse>
}
