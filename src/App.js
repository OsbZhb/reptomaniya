/* eslint-disable react/jsx-no-undef */

// COMPONENTS
import { Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Header_new from "./components/Header/Header_new";
import Footer from "./components/Footer/Footer";
import GeneralComponents from "./components/GeneralComponents/GeneralComponents";

// PAGES
import ShopPages from "./components/pages/ShopPages.jsx";
import MainLayout from "./components/pages/MainLayout";




function App() {
  return (
    <div className="App container">
      {/* <Header /> */}
      <Header_new />
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
