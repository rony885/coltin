// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Loader from "./components/Loader/Loader";
// import TopBar from "./components/TopBar";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home/Home";
// import Contact from "./pages/Contact/Contact";
// import GoTop from "./components/GoTop";

// function App() {
//   return (
//     <div className="">
//       <BrowserRouter>
//         <body className="preload-wrapper popup-loader template-index">
//           <Loader />
//           <div id="wrapper">
//             <TopBar />
//             <Header />
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/contact" element={<Contact />} />
//             </Routes>
//             <Footer />
//           </div>

//           <GoTop />
//         </body>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Loader from "./components/Loader/Loader";
// import TopBar from "./components/TopBar";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact/Contact";
import GoTop from "./components/GoTop";
import ToolbarBottom from "./components/ToolbarBottom";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import MobileMenuVertical from "./components/MobileMenu/MobileMenuVertical";
import ToolbarShopmb from "./components/ToolbarShopmb";
import NotFound from "./components/NotFound";
import About from "./pages/About/About";
import Wishlist from "./pages/Wishlist/Wishlist";
import { useEffect, useState } from "react";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import ModalCompare from "./components/ModalCompare";
import ViewCart from "./pages/ViewCart/ViewCart";
import Checkout from "./pages/Checkout/Checkout";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Loader from "./components/Loader/Loader";
import Product from "./pages/Product/Product";
import FilterSidebar from "./components/FilterSidebar/FilterSidebar";
import SidebarProduct from "./components/FilterSidebar/SidebarProduct";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Login from "./pages/Account/Login";
import Register from "./pages/Account/Register";
import ModalQuickAdd from "./components/ModalQuickAdd";
import ModalQuickView from "./components/ModalQuickView";
import Gallery from "./pages/Gallery/Gallery";
import Top from "./components/Top";
// import ModalFindSize from "./components/ModalFindSize";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [filterSidebarOpen, setFilterSidebarOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  // const [isFindSizeOpen, setIsFindSizeOpen] = useState(false);

  const toggleCart = () => {
    setCartOpen((prev) => !prev);
  };
  const closeCart = () => {
    setCartOpen(false);
  };

  const toggleFilterSidebar = () => {
    setFilterSidebarOpen((prev) => !prev);
  };
  const closeFilterSidebar = () => {
    setFilterSidebarOpen(false);
  };

  const openQuickView = () => setQuickViewOpen(true);
  const closeQuickView = () => setQuickViewOpen(false);

  // const openModalFindSize = () => setIsFindSizeOpen(true);
  // const closeModalFindSize = () => setIsFindSizeOpen(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div
            className="preload-wrapper popup-loader template-index"
            id="wrapper"
          >
            <Top />
            {/* <TopBar /> */}
            <Header toggleCart={toggleCart} />
            <Routes>
              <Route
                path="/"
                element={<Home openQuickView={openQuickView} />}
              />
              <Route path="/about" element={<About />} />
              <Route
                path="/product"
                element={
                  <Product
                    toggleFilterSidebar={toggleFilterSidebar}
                    openQuickView={openQuickView}
                  />
                }
              />
              <Route
                path="/product-details"
                element={
                  <ProductDetails
                    openQuickView={openQuickView}
                    toggleCart={toggleCart}
                    closeCart={closeCart}
                  />
                }
              />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog-details" element={<BlogDetails />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/view-cart" element={<ViewCart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </div>
          <GoTop />
          <ToolbarBottom />
          <MobileMenu />
          <MobileMenuVertical />
          <ToolbarShopmb />
          <ShoppingCart cartOpen={cartOpen} closeCart={closeCart} />
          <SidebarProduct />
          <FilterSidebar
            filterSidebarOpen={filterSidebarOpen}
            closeFilterSidebar={closeFilterSidebar}
          />
          <ModalCompare />
          <ModalQuickAdd toggleCart={toggleCart} onClose={closeQuickView} />
          <ModalQuickView
            isOpen={quickViewOpen}
            onClose={closeQuickView}
            toggleCart={toggleCart}
            closeCart={closeCart}
            // modalFindSizeOpen={modalFindSizeOpen}
          />
          {/* <ModalFindSize
          isOpen={isFindSizeOpen}
          onClose={closeModalFindSize}
        /> */}
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
