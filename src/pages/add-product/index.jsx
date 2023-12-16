import { useState } from "react";
import Layout from "../../components/Layout";
import { firestore } from "../../firebase";

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: null,
    colors: null,
    extra: null,
    description: null,
    price: null,
  });

  const [saved, setSaved] = useState(false);

  const handleInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveProduct = () => {
    firestore
      .collection("products")
      .add(product)
      .then((docRef) => {
        console.log("Document was added with ID", docRef.id);
        setSaved(true);
      })
      .catch((error) => {
        console.log("Error adding document", error);
      });
  };

  return (
    <Layout>
      <div className="w-[500px] mx-auto">
        <h2 className="text-xl font-medium mb-4">Add Product</h2>
        <div>
          <input
            onChange={handleInputChange}
            className="border border-gray-300 block w-full py-2 px-2 rounded-md mb-2"
            type="text"
            placeholder="Name"
            id="name"
            name="name"
          />
        </div>
        <div>
          <input
            onChange={handleInputChange}
            className="border border-gray-300 block w-full py-2 px-2 rounded-md mb-2"
            type="text"
            placeholder="Gender"
            id="gender"
            name="gender"
          />
        </div>
        <div>
          <input
            onChange={handleInputChange}
            className="border border-gray-300 block w-full py-2 px-2 rounded-md mb-2"
            type="text"
            placeholder="Price"
            id="price"
            name="price"
          />
        </div>
        <div>
          <input
            onChange={handleInputChange}
            className="border border-gray-300 block w-full py-2 px-2 rounded-md mb-2"
            type="text"
            placeholder="Colors"
            id="colors"
            name="colors"
          />
        </div>
        <div>
          <textarea
            onChange={handleInputChange}
            className="border border-gray-300 block w-full py-2 px-2 rounded-md mb-2"
            name="description"
            id="description"
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div>
          <input
            onChange={handleInputChange}
            className="border border-gray-300 block w-full py-2 px-2 rounded-md mb-2"
            type="text"
            placeholder="Extra"
            id="extra"
            name="extra"
          />
        </div>
        <div className="mt-5">
          <button
            onClick={handleSaveProduct}
            className="w-full block bg-black text-white rounded-full py-3"
          >
            Save
          </button>
        </div>
        {saved && (
          <div className="mt-4">
            <p className="border border-green-500 bg-green-100 p-3">
              The product was saved.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
}
