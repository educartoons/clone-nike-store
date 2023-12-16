import { useParams } from "react-router-dom";

import ProductGallery from "../../components/Gallery";
import Layout from "../../components/Layout";
import ProductDescription from "../../components/ProductDescription";

const data = {
  name: "Nike Dunk Low Retro",
  images: [
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1bcbca4-e853-4df7-b329-5be3c61ee057/dunk-low-retro-mens-shoes-87q0hf.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e863ca32-5f23-49eb-9ee6-da62958650f9/dunk-low-retro-mens-shoes-87q0hf.png",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/2c25c676-832d-453f-9cd9-dd6b492d7636/dunk-low-retro-mens-shoes-87q0hf.png",
  ],
  price: 115,
  gender: "male",
};

export default function ProductPage() {
  const { slug } = useParams();

  console.log(slug);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="flex">
          <div className="grow">
            <ProductGallery />
          </div>
          <div className="flex-none w-[456px]">
            <ProductDescription />
          </div>
        </div>
      </div>
    </Layout>
  );
}
