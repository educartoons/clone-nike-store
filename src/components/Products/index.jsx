import { useState, useEffect } from "react";
// import { data } from "./data";
import Product from "../Product";
import { firestore } from "../../firebase/index";

export default function Products() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const collectionRef = firestore.collection("products");
    const snapshot = await collectionRef.get();

    const fetchedData = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setProducts(fetchedData);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
