"use client";

import { ProductCard } from "@/app/components/ProductCard";
import { useProductContext } from "./context/productContext";
import { Navbar } from "./components/Navbar";

export default function Home() {
  const { products, loading, error } = useProductContext();

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <Navbar />
      <div>
        <h1 className="flex items-center justify-center">Our Products</h1>

        <div className="grid grid-cols-5 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
