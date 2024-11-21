import { Product } from "../types/Product";

const PROJECT_TOKEN = "67366c19aafa2ef222307c16";

export async function fetchProducts(
  page: string,
  limit: string
): Promise<Product[]> {
  const response = await fetch(
    `https://${PROJECT_TOKEN}.mockapi.io/products?page=${page}&limit=${limit}`,
    {}
  );

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} `);
  }

  const data: Product[] = await response.json();
  return data;
}
