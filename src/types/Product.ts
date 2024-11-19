export interface ProductsResponse {
  success: boolean;
  message: string;
  offset: number;
  limit: number;
  products: Product[];
}

export interface Product {
  photo_url: string;
  description: string;
  id: number;
  created_at: string;
  updated_at: string;
  name: string;
  price: number;
  category: string;
}
