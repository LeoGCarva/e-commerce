"use client";

import Image from "next/image";
import { useState } from "react";
import { ProductType } from "../types/ProductType";

export function ProductCard({ product }: { product: ProductType }) {
  const [quantity, setQuantity] = useState(0);

  return (
    <div className="flex items-center justify-center flex-col px-12 py-6 gap-6 border">
      <span className="max-w-40">
        <Image
          src={product.image}
          alt={product.title}
          width={150}
          height={150}
        />
      </span>

      <div className="flex w-full flex-col items-center justify-center gap-2">
        <h3 className="text-center">{product.title}</h3>

        <div className="flex w-full justify-between">
          <p className="price">${product.price}</p>

          <div className="flex gap-2">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
        </div>

        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}
