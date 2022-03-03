import react from "react";

import ProductCard from "./components/ProductCard";

// Use this ID to fetch the correct product from the API
// eslint-disable-next-line
const PRODUCT_ID = "1";

function App() {
  return <ProductCard prodcutId={PRODUCT_ID} />;
}

export default App;
