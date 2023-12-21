import ErrorBoundary from "../../components/ErrorBoundary";
import Layout from "../../components/Layout";
import Products from "../../components/Products";

export default function ProductsPage() {
  return (
    <Layout>
      <ErrorBoundary>
        <Products />
      </ErrorBoundary>
    </Layout>
  );
}
