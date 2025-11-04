export type ProductType = {
  id: string;
  image: string;
  price: number;
  category: string;
  description: string;
  title: string;
  rating: {
    rate: number;
    count: number;
  };
};