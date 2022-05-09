import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductCard from "../src/pages/ProductCard";
import NewCategory from "./components/FormCategory";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/products/:id" />
          <Route path="/formulario/" element={<NewCategory />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
