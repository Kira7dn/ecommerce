import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./scenes/global/Navbar";
import Home from "./scenes/home/Home";
import Footer from "./scenes/global/Footer";
import CartMenu from "./scenes/global/CartMenu";
import { useEffect } from "react";
import ItemDetail from "./scenes/itemDetail/itemDetail";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetail />} />
        </Routes>
        <CartMenu />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
