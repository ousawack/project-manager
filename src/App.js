import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./pages/Dashboard";
import TicketPage from "./pages/TicketPage";
import CategoriesContext from "./context";
import { useState } from "react";

const App = () => {
  const [categories, setCategories] = useState(null);
  const value = { categories, setCategories };

  return (
    <div className="app">
      <CategoriesContext.Provider value={value}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ticket" element={<TicketPage />} />
          </Routes>
        </BrowserRouter>
      </CategoriesContext.Provider>
    </div>
  );
};

export default App;
