import Bag from "../../components/Bag";
import Layout from "../../components/Layout";
import Summary from "../../components/Summary";

export default function CartPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <Bag />
          </div>
          <div>
            <Summary />
          </div>
        </div>
      </div>
    </Layout>
  );
}
