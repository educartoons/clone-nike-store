import { useState, useEffect } from "react";
// import { data } from "./data";
import Product from "../Product";
import { firestore } from "../../firebase/index";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const fetchProducts = async () => {
    const collectionRef = firestore.collection("products");

    try {
      const snapshot = await collectionRef.get();

      const fetchedData = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });

      if (fetchedData.length === 0) {
        setError(true);
      } else {
        setProducts(fetchedData);
      }
    } catch (err) {
      console.log("esto es error");
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
      {error && (
        <h2 className="col-span-3 text-center text-5xl mt-10">
          Oops, something went wrong
        </h2>
      )}
    </div>
  );
}
