import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Top from "./components/Top";
import GoTop from "./components/GoTop";
import NotFound from "./components/NotFound";
import Loader from "./components/Loader/Loader";

import ToolbarBottom from "./components/ToolbarBottom";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import MobileMenuVertical from "./components/MobileMenu/MobileMenuVertical";
import ModalQuickAdd from "./components/ModalQuickAdd";
import ModalQuickView from "./components/ModalQuickView";

import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import ModalCompare from "./components/ModalCompare";
import FilterSidebar from "./components/FilterSidebar/FilterSidebar";
import SidebarProduct from "./components/FilterSidebar/SidebarProduct";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Product from "./pages/Product/Product";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Gallery from "./pages/Gallery/Gallery";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Contact from "./pages/Contact/Contact";
import Wishlist from "./pages/Wishlist/Wishlist";
import ViewCart from "./pages/ViewCart/ViewCart";
import Checkout from "./pages/Checkout/Checkout";

import Login from "./pages/Account/Login";
import Register from "./pages/Account/Register";

import axios from "axios";

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

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Categories
        const categoriesRes = await axios.get(
          "https://apps.fusiontradebd.com/server/product_api/unpaginate_product_category/",
        );
        setCategories(categoriesRes.data);

        // Fetch Sub-Categories
        const subCategoriesRes = await axios.get(
          "https://apps.fusiontradebd.com/server/product_api/unpaginate_product_sub_category",
        );
        setSubCategories(subCategoriesRes.data);

        // Fetch Brands
        const brandsRes = await axios.get(
          "https://apps.fusiontradebd.com/server/product_api/unpaginate_product_brand",
        );
        setBrands(brandsRes.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchData();
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
            <Header toggleCart={toggleCart} categories={categories} />

            <Routes>
              <Route
                path="/"
                element={
                  <Home openQuickView={openQuickView} categories={categories} />
                }
              />
              <Route path="/about" element={<About />} />
              <Route
                path="/product"
                element={
                  <Product
                    toggleFilterSidebar={toggleFilterSidebar}
                    openQuickView={openQuickView}
                    categories={categories}
                    subCategories={subCategories}
                    brands={brands}
                  />
                }
              />
              <Route
                path="/product-details/:id"
                element={
                  <ProductDetails
                    openQuickView={openQuickView}
                    toggleCart={toggleCart}
                    closeCart={closeCart}
                  />
                }
              />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog-details/:id" element={<BlogDetails />} />
              <Route path="/contact" element={<Contact />} />
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
          <MobileMenuVertical categories={categories} />
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
