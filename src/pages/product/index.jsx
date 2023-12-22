import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductGallery from "../../components/Gallery";
import Layout from "../../components/Layout";
import ProductDescription from "../../components/ProductDescription";
import ErrorBoundary from "../../components/ErrorBoundary";
import LoadingIcon from "../../components/Loading";

import { getDoc } from "firebase/firestore";
import { firestore } from "../../firebase";

export default function ProductPage() {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  const fetchProduct = async () => {
    const docRef = firestore.collection("products").doc(productId);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setProduct({
        id: productId,
        ...docSnap.data(),
      });
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <Layout>
      <ErrorBoundary>
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="flex justify-center">
              <LoadingIcon />
            </div>
          ) : (
            <div className="flex">
              <div className="grow">
                <ProductGallery
                  smallImages={product.smallImages}
                  largeImages={product.largeImages}
                />
              </div>
              <div className="flex-none w-[456px]">
                <ProductDescription product={product} />
              </div>
            </div>
          )}
        </div>
      </ErrorBoundary>
    </Layout>
  );
}
