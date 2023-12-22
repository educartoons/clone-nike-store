import { useState, useRef } from "react";
import { MDXEditor } from "@mdxeditor/editor/MDXEditor";

import { toolbarPlugin, listsPlugin } from "@mdxeditor/editor";

import { ListsToggle } from "@mdxeditor/editor/plugins/toolbar/components/ListsToggle";

import Layout from "../../components/Layout";
import { firestore } from "../../firebase";

import "@mdxeditor/editor/style.css";
// import "./style.scss";

export default function AddProduct() {
  const ref = useRef(null);

  const [product, setProduct] = useState({
    name: null,
    colors: null,
    category: null,
    extra: null,
    description: null,
    price: null,
    discount: null,
  });

  const [largeImages, setLargeImages] = useState([""]);
  const [smallImages, setSmallImages] = useState([""]);

  const [saved, setSaved] = useState(false);
  const [formId, setFormId] = useState(crypto.randomUUID());

  const handleInputChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveProduct = (event) => {
    event.preventDefault();
    firestore
      .collection("products")
      .add({
        ...product,
        largeImages,
        smallImages,
      })
      .then((docRef) => {
        console.log("Document was added with ID", docRef.id);
        setSaved(true);
        setFormId(crypto.randomUUID());
      })
      .catch((error) => {
        console.log("Error adding document", error);
      });
  };

  const handleAddImage = (e) => {
    e.preventDefault();
    setLargeImages([...largeImages, ""]);
    setSmallImages([...smallImages, ""]);
  };

  const handleChangeLargeImages = (e) => {
    const name = String(e.target.name);
    const id = Number(name.slice("large-image".length + 1));
    const newLargeImages = [...largeImages];
    newLargeImages[id] = e.target.value;
    setLargeImages(newLargeImages);
  };

  const handleChangeSmallImages = (e) => {
    const name = String(e.target.name);
    const id = Number(name.slice("small-image".length + 1));
    const newSmallImages = [...smallImages];
    newSmallImages[id] = e.target.value;
    setSmallImages(newSmallImages);
  };

  return (
    <Layout>
      <div className="">
        <h2 className="text-2xl font-medium mb-4 text-center">Add Product</h2>
        <form key={formId}>
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h2 className="text-xl font-medium mb-4">Description</h2>
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
                <input
                  onChange={handleInputChange}
                  className="border border-gray-300 block w-full py-2 px-2 rounded-md mb-2"
                  type="text"
                  placeholder="Category"
                  id="category"
                  name="category"
                />
              </div>
              <div>
                <input
                  onChange={handleInputChange}
                  className="border border-gray-300 block w-full py-2 px-2 rounded-md mb-2"
                  type="text"
                  placeholder="Discount"
                  id="discount"
                  name="discount"
                />
              </div>
              <div className="my-library">
                <MDXEditor
                  ref={ref}
                  markdown="Product description"
                  contentEditableClassName="prose"
                  plugins={[
                    listsPlugin(),
                    toolbarPlugin({
                      toolbarContents: () => (
                        <>
                          <ListsToggle />
                        </>
                      ),
                    }),
                  ]}
                  onChange={(content) => {
                    setProduct({
                      ...product,
                      description: content,
                    });
                  }}
                />
                {}
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
              <div>
                <input
                  onChange={handleInputChange}
                  className="border border-gray-300 block w-full py-2 px-2 rounded-md mb-2"
                  type="text"
                  placeholder="Featured Image"
                  id="image"
                  name="image"
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
            <div>
              <h2 className="text-xl font-medium mb-4">Carousel</h2>
              <div>
                <p className="mb-3">Large Images:</p>
                {largeImages.map((value, index) => (
                  <div key={index}>
                    <input
                      onChange={handleChangeLargeImages}
                      type="text"
                      className="border border-gray-300 block w-full py-2 px-2 rounded-md mb-2"
                      name={`large-image-${index}`}
                    />
                  </div>
                ))}
                <div>
                  <button
                    onClick={handleAddImage}
                    className="bg-blue-600 text-white rounded-full py-3 px-8"
                  >
                    Add Image
                  </button>
                </div>
              </div>

              <div className="mt-4">
                <p className="mb-3">Small Images:</p>
                {smallImages.map((value, index) => (
                  <div key={index}>
                    <input
                      onChange={handleChangeSmallImages}
                      type="text"
                      className="border border-gray-300 block w-full py-2 px-2 rounded-md mb-2"
                      name={`small-image-${index}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
}
