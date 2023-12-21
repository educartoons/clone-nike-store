import { useState } from "react";
import { MDXEditor } from "@mdxeditor/editor/MDXEditor";

import { toolbarPlugin, listsPlugin } from "@mdxeditor/editor";

import { ListsToggle } from "@mdxeditor/editor/plugins/toolbar/components/ListsToggle";

import Layout from "../../components/Layout";
import { firestore } from "../../firebase";

import "@mdxeditor/editor/style.css";

const defaultSnippetContent = `
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
`.trim();

const simpleSandpackConfig = {
  defaultPreset: "react",
  presets: [
    {
      label: "React",
      name: "react",
      meta: "live react",
      sandpackTemplate: "react",
      sandpackTheme: "light",
      snippetFileName: "/App.js",
      snippetLanguage: "jsx",
      initialSnippetContent: defaultSnippetContent,
    },
  ],
};

export default function AddProduct() {
  const [product, setProduct] = useState({
    name: null,
    colors: null,
    extra: null,
    description: null,
    price: null,
  });

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
      .add(product)
      .then((docRef) => {
        console.log("Document was added with ID", docRef.id);
        setSaved(true);
        setFormId(crypto.randomUUID());
      })
      .catch((error) => {
        console.log("Error adding document", error);
      });
  };

  return (
    <Layout>
      <div className="w-[500px] mx-auto">
        <form key={formId}>
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
          <div className="no-styles">
            <MDXEditor
              className="no-styles"
              markdown="hello world"
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
            />
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
              placeholder="Url Image"
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
        </form>
      </div>
    </Layout>
  );
}
