import { Params } from "../types/Params";
import { Product } from "../types/Product";

const PROJECT_TOKEN = "67366c19aafa2ef222307c16";

export async function fetchProducts(
  page: string,
  limit: string,
  params?: Params
): Promise<Product[]> {
  const url = new URL(`https://${PROJECT_TOKEN}.mockapi.io/products`);
  url.searchParams.append("page", page);
  url.searchParams.append("limit", limit);

  if (params) {
    const keys = Object.keys(params);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const value = params[key];
      url.searchParams.append(key, String(value));
    }
  }

  const response = await fetch(url, { method: "GET" });

  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText} `);
  }

  const data: Product[] = await response.json();
  return data;
}
