import axios, { AxiosResponse, AxiosRequestConfig } from "axios";
import { deserialize } from "jsonapi-fractal";
import { apiUrl } from "../configs/app";
import { ICategory, IProduct } from "./types";

export async function getCategories(): Promise<Array<ICategory>> {
  const response = await call("GET", "/product-categories");

  return deserialize(response.data) as Array<ICategory>;
}

export async function getProducts(
  categoryId: string
): Promise<Array<IProduct>> {
  const response = await call(
    "GET",
    "/product-categories/" + categoryId + "/products"
  );

  return deserialize(response.data) as Array<IProduct>;
}

async function call(
  method: string,
  path: string
): Promise<AxiosResponse<unknown>> {
  const response = await axios({
    method,
    url: apiUrl + path,
  } as AxiosRequestConfig);

  return response;
}
