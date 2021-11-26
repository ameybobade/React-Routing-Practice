import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Customers from "./components/pages/Customers";
import Products from "./components/pages/Products";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/customers" element={<Customers/>}>
          
        </Route>
        <Route path="/products" element={<Products/>}>
          
        </Route>
        </Routes>
    </div>
  );
}

export default App;
