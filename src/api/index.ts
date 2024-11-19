import { ProductsResponse } from "../types/Product";

export async function fetchProducts(
  offset: string,
  limit: string
): Promise<ProductsResponse> {
  const response = await fetch(
    `https://api.slingacademy.com/v1/sample-data/products?offset=${offset}&limit=${limit}`,
    {}
  );

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} `);
  }

  const data: ProductsResponse = await response.json();
  return data;
}
