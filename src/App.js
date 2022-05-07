import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductCard from "../src/pages/ProductCard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ProductCard />}></Route>
          <Route path="/products/:id" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
