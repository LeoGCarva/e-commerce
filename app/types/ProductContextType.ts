import { ProductType } from "./ProductType";

export type ProductContextType = {
  products: ProductType[];
  loading: boolean;
  error: null | string;
};