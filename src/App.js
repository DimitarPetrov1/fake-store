import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import "./css/App.css";
import Item from "./components/Item";
import SingleItemBox from "./components/SingleItemBox";
import Logo from "./img/logo.png";
import ShoppingCart from "./components/micro/ShoppingCart";
import BuyButton from "./components/micro/BuyButton";

function App() {
  const [items, setItems] = useState([]);
  const [currentCategoryName, setCurrentCategoryName] = useState("");
  const [
    currentCategoryItemsDetails,
    setCurrentCategoryItemsDetails
  ] = useState([]);
  const [currentItem, setCurrentItem] = useState([]);
  const [loading, isLoading] = useState(false);
  const [openCategoryMenu, setOpenCategoryMenu] = useState(false);
  const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ];
  const addToCart = (e) => {
    const cart = document.querySelector(".nav-cart");
    const badge = document.createElement("div");
    badge.classList.add("badge");
    cart.appendChild(badge);
  };
  useEffect(() => {
    const fetchHomepage = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => {
          isLoading(false);
          setItems(res);
        })
        .catch((error) => console.log("Error:", error));
    };
    fetchHomepage();
    isLoading(true);
  }, []);
  useEffect(() => {
    // FIx when using back button
    let URL_PATH = window.location.pathname.replace("-", " ");

    const fetchCategory = async () => {
      await fetch(`https://fakestoreapi.com/products${URL_PATH}`)
        .then((res) => res.json())
        .then((res) => {
          isLoading(false);
          setCurrentCategoryItemsDetails(res);
        })
        .catch((error) => console.log("Error:", error));
    };
    fetchCategory();
    isLoading(true);
  }, [currentCategoryName]);
  useEffect(() => {
    let ID_PATH = window.location.pathname.replace("product/", "");

    const fetchSingleItem = async () => {
      await fetch(`https://fakestoreapi.com/products${ID_PATH}`)
        .then((res) => res.json())
        .then((res) => {
          isLoading(false);
          setCurrentItem(res);
        })
        .catch((error) => console.log("Error:", error));
    };
    fetchSingleItem();
    isLoading(true);
  }, []);
  const handleOpenCategoryMenu = () => {
    setOpenCategoryMenu(!openCategoryMenu);
  };
  const handleCloseMenu = () => {
    if (openCategoryMenu === true) {
      setOpenCategoryMenu(false);
    }
  };

  return (
    <div className="App" onClick={handleCloseMenu}>
      <div className={loading ? "loader" : "loading"}></div>
      <Router>
        <header>
          <nav>
            <Link to="/">
              <img id="main-logo" src={Logo} alt="LOGO" />
            </Link>
            <ul>
              <div
                className="nav-categories-label"
                onClick={handleOpenCategoryMenu}
              >
                categories
              </div>
              <div
                className={
                  openCategoryMenu
                    ? "nav-categories-wrap-open"
                    : "nav-categories-wrap"
                }
              >
                {categories.map((cat) => {
                  return (
                    <Link
                      key={cat}
                      to={`/category/${cat.replace(" ", "-")}`}
                      onClick={(e) =>
                        setCurrentCategoryName(e.target.textContent)
                      }
                    >
                      <li>{cat}</li>
                    </Link>
                  );
                })}
              </div>
              <Link className="nav-cart">
                <ShoppingCart />
              </Link>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/category">
            <div className="main-page">
              <Route path="/product">
                <Item
                  itemTitle={currentItem.title}
                  itemCategory={currentItem.category}
                  itemPrice={currentItem.price}
                  itemProductCode={currentItem.id}
                  itemImage={currentItem.image}
                  itemDescription={currentItem.description}
                />
              </Route>
              <Route path="/">
                {/* <p>{catName}</p> */}
                {currentCategoryItemsDetails.map((item) => {
                  return (
                    <div className="single-item-link">
                      <Link
                        to={`/product/${item.id}`}
                        key={item.id}
                        className="single-item"
                        onClick={() => {
                          setCurrentItem(item);
                        }}
                      >
                        <SingleItemBox
                          itemTitle={item.title}
                          itemPrice={item.price}
                          itemImage={item.image}
                          itemDescription={item.description}
                        />
                      </Link>
                      <BuyButton addToCartFunction={addToCart} />
                    </div>
                  );
                })}
              </Route>
            </div>
          </Route>
          <Route path="/product">
            <div className="main-page">
              {/* Fix props */}
              <Item
                itemTitle={currentItem.title}
                itemCategory={currentItem.category}
                itemPrice={currentItem.price}
                itemProductCode={currentItem.id}
                itemImage={currentItem.image}
                itemDescription={currentItem.description}
              />
            </div>
          </Route>
          <Route path="/">
            <div className="main-page">
              <div className="page-items-container">
                {items.map((item) => {
                  return (
                    <div className="single-item-link">
                      <Link
                        to={`/product/${item.id}`}
                        key={item.id}
                        onClick={() => {
                          setCurrentItem(item);
                        }}
                      >
                        <SingleItemBox
                          itemTitle={item.title}
                          itemPrice={item.price}
                          itemImage={item.image}
                        />
                      </Link>
                      <BuyButton addToCartFunction={addToCart} />
                    </div>
                  );
                })}
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
      <footer>
        <a href="https://fakestoreapi.com/" rel="noreferrer" target="_blank">
          Made with Fake Store API
        </a>
      </footer>
    </div>
  );
}

export default App;
