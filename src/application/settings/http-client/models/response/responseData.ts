import { Response } from "./response";

export interface ResponseData<T> extends Response {
  data: T;
}