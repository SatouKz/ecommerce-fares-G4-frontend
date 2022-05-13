import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// importar la carpeta endonde se encuentra los producto y se debe eliminar about
//y poner el products y en "element" se pone a donde quiero que me lleve la pagina
import HomePage from "../pages/HomePage";
import ProductCard from "../pages/ProductCard";
import NewCategory from "../components/FormCategory";
export const appRouter = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/" element={<ProductCard />} />
          <Route path="/products/:id" />
          <Route path="/formulario/" element={<NewCategory />} />
          <Route path="/about" element={<about />} />
        </Routes>
      </Router>
    </>
  );
};

export default appRouter;
