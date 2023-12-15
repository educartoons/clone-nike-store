import { useState } from "react";
import { data } from "./data";
import Product from "../Product";

export default function Products() {
  const [products] = useState(data);
  return (
    <div className="flex flex-wrap">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
