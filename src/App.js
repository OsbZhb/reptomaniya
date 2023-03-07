/* eslint-disable react/jsx-no-undef */

// COMPONENTS
import { Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GeneralComponents from "./components/GeneralComponents/GeneralComponents";

// PAGES
import ShopPages from "./components/pages/ShopPages.jsx";
import MainLayout from "./components/pages/MainLayout";



function App() {
  return (
    <div className="App container">
      <Header />
      <Routes>
        {/* <Route path="/" element={<MainLayout/>} /> */}
        <Route path="/" element={<GeneralComponents/>} />
          <Route path="ShopPages" element={<ShopPages/>} />
        </Routes>
      <Footer />
      </div>
  );
}

export default App;
