import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { FiGift, FiTruck } from "react-icons/fi";

const ShoppingCart = ({ cartOpen, closeCart }) => {
  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (cartOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [cartOpen]);

  return (
    // <div className="modal fullRight fade modal-shopping-cart show" id="shoppingCart">
    <Wrapper>
      {cartOpen && (
        <div className="modal-backdrop fade show" onClick={closeCart}></div>
      )}
      <div
        // id="shoppingCart"
        className={`modal fullRight fade modal-shopping-cart ${
          cartOpen ? "show" : ""
        }`}
        style={{ display: cartOpen ? "block" : "none" }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="header">
              <div className="title fw-5">Shopping cart (2)</div>
              {/* <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            onClick={closeCart}
            ></span> */}
              <span
                className="icon-close icon-close-popup"
                onClick={closeCart}
                role="button"
                aria-label="Close cart"
              ></span>
            </div>
            <div className="wrap">
              <div
                className="shipping-bar-cart full"
                data-price_shipping_bar="50000"
              >
                <div className="title-freeship">
                  Free Shipping on orders
                  <span
                    className="money"
                    data-currency-usd="$500.00"
                    data-currency="USD"
                  >
                    $500.00
                  </span>
                </div>
                <div className="title-spend hide">
                  Spend
                  <span className="spend">
                    <span
                      className="money"
                      data-currency-usd="$-50.00"
                      data-currency="USD"
                    >
                      $-50.00
                    </span>
                  </span>
                  more and get <b>Free Shipping!</b>
                </div>
                <div className="title-shipping">
                  Congratulations , you've got free shipping!
                </div>
                <div className="shipping-progress_bar">
                  <div
                    className="shipping-progress fire-done"
                    style={{ width: "100%" }}
                  >
                    <div className="truck-svgrepo">
                      <svg
                        width="30"
                        height="30"
                        fill="none"
                        className="absolute"
                      >
                        <circle
                          cx="15"
                          cy="15"
                          r="14.5"
                          fill="#fff"
                          stroke="currentColor"
                        ></circle>
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth=".3"
                          d="M23.802 14.611 22.71 13.6a.643.643 0 0 1-.166-.25l-.857-2.325a1.722 1.722 0 0 0-1.607-1.12h-1.298v-.363a.59.59 0 0 0-.59-.59h-7.841a.448.448 0 0 0-.453.43.439.439 0 0 0 .438.447h7.57v3.805a.59.59 0 0 0 .59.59h3.564l1.059.953v3.554h-.96a1.894 1.894 0 0 0-3.693 0h-2.953a1.894 1.894 0 0 0-3.693 0h-1.47a.448.448 0 0 0-.452.43.438.438 0 0 0 .438.447h1.491a1.895 1.895 0 0 0 3.678 0h2.968a1.894 1.894 0 0 0 3.678 0h1.255a.59.59 0 0 0 .59-.59V15.05a.589.589 0 0 0-.195-.439Zm-5.019-1.263v-2.565h1.298a.84.84 0 0 1 .785.546l.747 2.019h-2.83Zm-5.116 6.823a1.017 1.017 0 1 1 0-2.035 1.017 1.017 0 0 1 0 2.035Zm6.646 0a1.017 1.017 0 1 1 0-2.035 1.017 1.017 0 0 1 0 2.035Z"
                        ></path>
                        <path
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth=".3"
                          d="M8.47 12.283h4.974a.438.438 0 0 0 0-.878H8.47a.439.439 0 1 0 0 .878ZM13.876 14.28a.438.438 0 0 0-.439-.439H6.435a.44.44 0 1 0 0 .878h7.002a.439.439 0 0 0 .439-.44ZM11.101 16.716a.44.44 0 0 0-.438-.438H7.614a.439.439 0 0 0 0 .877h3.049a.438.438 0 0 0 .438-.439Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ss-mini-cart-wrap">
                <div className="ss-mini-cart-main">
                  <div className="ss-mini-cart-sroll">
                    <div className="ss-mini-cart-items">
                      <div className="ss-mini-cart-item">
                        <div className="ss-mini-cart-image">
                          <Link to="/product-details">
                            <img src="images/products/white-2.jpg" alt="" />
                          </Link>
                        </div>
                        <div className="ss-mini-cart-info">
                          <Link className="title link" to="/product-details">
                            Wedge heeled Suede Espadrilles
                          </Link>
                          <div className="meta-variant">Light gray</div>
                          <div className="price fw-6">$25.00</div>
                          <div className="ss-mini-cart-btns">
                            <div className="wg-quantity small">
                              <span className="btn-quantity minus-btn">-</span>
                              <input type="text" name="number" value="1" />
                              <span className="btn-quantity plus-btn">+</span>
                            </div>
                            <div className="ss-mini-cart-remove">Remove</div>
                          </div>
                        </div>
                      </div>
                      <div className="ss-mini-cart-item">
                        <div className="ss-mini-cart-image">
                          <Link to="/product-details">
                            <img src="images/products/white-3.jpg" alt="" />
                          </Link>
                        </div>
                        <div className="ss-mini-cart-info">
                          <Link className="title link" to="/product-details">
                            Unique Engagement Rings
                          </Link>
                          <div className="price fw-6">$25.00</div>
                          <div className="ss-mini-cart-btns">
                            <div className="wg-quantity small">
                              <span className="btn-quantity minus-btn">-</span>
                              <input type="text" name="number" value="1" />
                              <span className="btn-quantity plus-btn">+</span>
                            </div>
                            <div className="ss-mini-cart-remove">Remove</div>
                          </div>
                        </div>
                      </div>
                      <div className="ss-mini-cart-item">
                        <div className="ss-mini-cart-image">
                          <Link to="/product-details">
                            <img src="images/products/Fa_3a.jpg" alt="" />
                          </Link>
                        </div>
                        <div className="ss-mini-cart-info">
                          <Link className="title link" to="/product-details">
                            Satin oversized double breast blazer
                          </Link>
                          <div className="price fw-6">$37.00</div>
                          <div className="ss-mini-cart-btns">
                            <div className="wg-quantity small">
                              <span className="btn-quantity minus-btn">-</span>
                              <input type="text" name="number" value="1" />
                              <span className="btn-quantity plus-btn">+</span>
                            </div>
                            <div className="ss-mini-cart-remove">Remove</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ss-mini-cart-bottom">
                  <div className="ss-mini-cart-tool">
                    <div className="ss-mini-cart-tool-btn btn-add-note">
                      <AiOutlineEdit size={16} className="me-1" />
                      <span>Add note</span>
                    </div>
                    <div className="ss-mini-cart-tool-btn btn-add-gift">
                      <FiGift size={17} className="me-1" />
                      <span>Add Gift</span>
                    </div>
                    <div className="ss-mini-cart-tool-btn btn-estimate-shipping">
                      <FiTruck size={26} className="me-1" />
                      <span>Shipping</span>
                    </div>
                  </div>
                  <div className="ss-mini-cart-bottom-wrap">
                    <div className="ss-cart-totals-discounts">
                      <div className="ss-cart-total">Subtotal</div>
                      <div className="ss-totals-total-value fw-6">
                        $49.99 USD
                      </div>
                    </div>
                    <div className="ss-cart-tax">
                      Taxes and <Link to="#">shipping</Link> calculated at
                      checkout
                    </div>
                    <div className="ss-mini-cart-line"></div>
                    <div className="ss-cart-checkbox">
                      <div className="ss-checkbox-wrapp">
                        <input
                          className=""
                          type="checkbox"
                          id="CartDrawer-Form_agree"
                          name="agree_checkbox"
                        />
                        <div>
                          <i className="icon-check"></i>
                        </div>
                      </div>
                      <label for="CartDrawer-Form_agree">
                        I agree with the
                        <Link to="#" title="Terms of Service">
                          terms and conditions
                        </Link>
                      </label>
                    </div>
                    <div className="ss-mini-cart-view-checkout">
                      <Link
                        to="/view-cart"
                        className="ss-btn btn-outline radius-3 link w-100 justify-content-center"
                        onClick={closeCart}
                      >
                        View cart
                      </Link>
                      <Link
                        to="/checkout"
                        className="ss-btn btn-fill radius-3 w-100 justify-content-center"
                        onClick={closeCart}
                      >
                        <span>Check out</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* <div className="ss-mini-cart-tool-openable add-note">
                  <div className="overplay ss-mini-cart-tool-close"></div>
                  <div className="ss-mini-cart-tool-content">
                    <label for="Cart-note" className="ss-mini-cart-tool-text">
                      <span className="icon">
                        <AiOutlineEdit size={16} className="d-inline-block" />
                      </span>
                      <span>Add Order Note</span>
                    </label>
                    <textarea
                      name="note"
                      id="Cart-note"
                      placeholder="How can we help you?"
                    ></textarea>
                    <div className="ss-cart-tool-btns justify-content-center">
                      <div className="ss-mini-cart-tool-primary text-center w-100 fw-6 ss-mini-cart-tool-close">
                        Close
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ss-mini-cart-tool-openable add-gift">
                  <div className="overplay ss-mini-cart-tool-close"></div>
                  <form className="ss-product-form-addgift">
                    <div className="ss-mini-cart-tool-content">
                      <div className="ss-mini-cart-tool-text">
                        <span className="icon">
                          <FiGift size={24} className="d-inline-block" />
                        </span>
                        <div className="ss-gift-wrap-infos">
                          <p>Do you want Link gift wrap?</p>
                          Only
                          <span className="price fw-6">$5.00</span>
                        </div>
                      </div>
                      <div className="ss-cart-tool-btns">
                        <button
                          type="submit"
                          className="ss-btn fw-6 w-100 justify-content-center btn-fill radius-3"
                        >
                          <span>Add Link gift wrap</span>
                        </button>
                        <div className="ss-mini-cart-tool-primary text-center w-100 fw-6 ss-mini-cart-tool-close">
                          Cancel
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="ss-mini-cart-tool-openable estimate-shipping">
                  <div className="overplay ss-mini-cart-tool-close"></div>
                  <div className="ss-mini-cart-tool-content">
                    <div className="ss-mini-cart-tool-text">
                      <div className="icon">
                        <FiTruck size={21} className="d-inline-block" />
                      </div>
                      <span className="fw-6">Estimate Shipping</span>
                    </div>
                    <div className="field">
                      <p>Country</p>
                      <select
                        className="ss-select w-100"
                        id="ShippingCountry_CartDrawer-Form"
                        name="address[country]"
                        data-default=""
                      >
                        <option value="---" data-provinces="[]">
                          ---
                        </option>
                        <option
                          value="Australia"
                          data-provinces="[['Australian Capital Territory','Australian Capital Territory'],['New South Wales','New South Wales'],['Northern Territory','Northern Territory'],['Queensland','Queensland'],['South Australia','South Australia'],['Tasmania','Tasmania'],['Victoria','Victoria'],['Western Australia','Western Australia']]"
                        >
                          Australia
                        </option>
                        <option value="Austria" data-provinces="[]">
                          Austria
                        </option>
                        <option
                          value="Canada"
                          data-provinces="[['Alberta','Alberta'],['British Columbia','British Columbia'],['Manitoba','Manitoba'],['New Brunswick','New Brunswick'],['Newfoundland and Labrador','Newfoundland and Labrador'],['Northwest Territories','Northwest Territories'],['Nova Scotia','Nova Scotia'],['Nunavut','Nunavut'],['Ontario','Ontario'],['Prince Edward Island','Prince Edward Island'],['Quebec','Quebec'],['Saskatchewan','Saskatchewan'],['Yukon','Yukon']]"
                        >
                          Canada
                        </option>
                        <option value="Czech Republic" data-provinces="[]">
                          Czechia
                        </option>
                        <option value="Denmark" data-provinces="[]">
                          Denmark
                        </option>
                        <option value="Finland" data-provinces="[]">
                          Finland
                        </option>
                        <option value="France" data-provinces="[]">
                          France
                        </option>
                        <option value="Germany" data-provinces="[]">
                          Germany
                        </option>
                        <option
                          value="Italy"
                          data-provinces="[['Agrigento','Agrigento'],['Alessandria','Alessandria'],['Ancona','Ancona'],['Aosta','Aosta Valley'],['Arezzo','Arezzo'],['Ascoli Piceno','Ascoli Piceno'],['Asti','Asti'],['Avellino','Avellino'],['Bari','Bari'],['Barletta-Andria-Trani','Barletta-Andria-Trani'],['Belluno','Belluno'],['Benevento','Benevento'],['Bergamo','Bergamo'],['Biella','Biella'],['Bologna','Bologna'],['Bolzano','South Tyrol'],['Brescia','Brescia'],['Brindisi','Brindisi'],['Cagliari','Cagliari'],['Caltanissetta','Caltanissetta'],['Campobasso','Campobasso'],['Carbonia-Iglesias','Carbonia-Iglesias'],['Caserta','Caserta'],['Catania','Catania'],['Catanzaro','Catanzaro'],['Chieti','Chieti'],['Como','Como'],['Cosenza','Cosenza'],['Cremona','Cremona'],['Crotone','Crotone'],['Cuneo','Cuneo'],['Enna','Enna'],['Fermo','Fermo'],['Ferrara','Ferrara'],['Firenze','Florence'],['Foggia','Foggia'],['Forlì-Cesena','Forlì-Cesena'],['Frosinone','Frosinone'],['Genova','Genoa'],['Gorizia','Gorizia'],['Grosseto','Grosseto'],['Imperia','Imperia'],['Isernia','Isernia'],['L'Aquila','L’Aquila'],['La Spezia','La Spezia'],['Latina','Latina'],['Lecce','Lecce'],['Lecco','Lecco'],['Livorno','Livorno'],['Lodi','Lodi'],['Lucca','Lucca'],['Macerata','Macerata'],['Mantova','Mantua'],['Massa-Carrara','Massa and Carrara'],['Matera','Matera'],['Medio Campidano','Medio Campidano'],['Messina','Messina'],['Milano','Milan'],['Modena','Modena'],['Monza e Brianza','Monza and Brianza'],['Napoli','Naples'],['Novara','Novara'],['Nuoro','Nuoro'],['Ogliastra','Ogliastra'],['Olbia-Tempio','Olbia-Tempio'],['Oristano','Oristano'],['Padova','Padua'],['Palermo','Palermo'],['Parma','Parma'],['Pavia','Pavia'],['Perugia','Perugia'],['Pesaro e Urbino','Pesaro and Urbino'],['Pescara','Pescara'],['Piacenza','Piacenza'],['Pisa','Pisa'],['Pistoia','Pistoia'],['Pordenone','Pordenone'],['Potenza','Potenza'],['Prato','Prato'],['Ragusa','Ragusa'],['Ravenna','Ravenna'],['Reggio Calabria','Reggio Calabria'],['Reggio Emilia','Reggio Emilia'],['Rieti','Rieti'],['Rimini','Rimini'],['Roma','Rome'],['Rovigo','Rovigo'],['Salerno','Salerno'],['Sassari','Sassari'],['Savona','Savona'],['Siena','Siena'],['Siracusa','Syracuse'],['Sondrio','Sondrio'],['Taranto','Taranto'],['Teramo','Teramo'],['Terni','Terni'],['Torino','Turin'],['Trapani','Trapani'],['Trento','Trentino'],['Treviso','Treviso'],['Trieste','Trieste'],['Udine','Udine'],['Varese','Varese'],['Venezia','Venice'],['Verbano-Cusio-Ossola','Verbano-Cusio-Ossola'],['Vercelli','Vercelli'],['Verona','Verona'],['Vibo Valentia','Vibo Valentia'],['Vicenza','Vicenza'],['Viterbo','Viterbo']]"
                        >
                          Italy
                        </option>
                        <option
                          value="Japan"
                          data-provinces="[['Aichi','Aichi'],['Akita','Akita'],['Aomori','Aomori'],['Chiba','Chiba'],['Ehime','Ehime'],['Fukui','Fukui'],['Fukuoka','Fukuoka'],['Fukushima','Fukushima'],['Gifu','Gifu'],['Gunma','Gunma'],['Hiroshima','Hiroshima'],['Hokkaidō','Hokkaido'],['Hyōgo','Hyogo'],['Ibaraki','Ibaraki'],['Ishikawa','Ishikawa'],['Iwate','Iwate'],['Kagawa','Kagawa'],['Kagoshima','Kagoshima'],['Kanagawa','Kanagawa'],['Kumamoto','Kumamoto'],['Kyōto','Kyoto'],['Kōchi','Kochi'],['Mie','Mie'],['Miyagi','Miyagi'],['Miyazaki','Miyazaki'],['Nagano','Nagano'],['Nagasaki','Nagasaki'],['Nara','Nara'],['Niigata','Niigata'],['Okayama','Okayama'],['Okinawa','Okinawa'],['Saga','Saga'],['Saitama','Saitama'],['Shiga','Shiga'],['Shimane','Shimane'],['Shizuoka','Shizuoka'],['Tochigi','Tochigi'],['Tokushima','Tokushima'],['Tottori','Tottori'],['Toyama','Toyama'],['Tōkyō','Tokyo'],['Wakayama','Wakayama'],['Yamagata','Yamagata'],['Yamaguchi','Yamaguchi'],['Yamanashi','Yamanashi'],['Ōita','Oita'],['Ōsaka','Osaka']]"
                        >
                          Japan
                        </option>
                        <option
                          value="Malaysia"
                          data-provinces="[['Johor','Johor'],['Kedah','Kedah'],['Kelantan','Kelantan'],['Kuala Lumpur','Kuala Lumpur'],['Labuan','Labuan'],['Melaka','Malacca'],['Negeri Sembilan','Negeri Sembilan'],['Pahang','Pahang'],['Penang','Penang'],['Perak','Perak'],['Perlis','Perlis'],['Putrajaya','Putrajaya'],['Sabah','Sabah'],['Sarawak','Sarawak'],['Selangor','Selangor'],['Terengganu','Terengganu']]"
                        >
                          Malaysia
                        </option>
                       
                      </select>
                    </div>
                    <div className="field">
                      <p>Zip code</p>
                      <input type="text" name="text" placeholder="" />
                    </div>
                    <div className="ss-cart-tool-btns">
                      <Link
                        to="#"
                        className="ss-btn fw-6 justify-content-center btn-fill w-100 radius-3"
                      >
                        <span>Estimate</span>
                      </Link>
                      <div className="ss-mini-cart-tool-primary text-center fw-6 w-100 ss-mini-cart-tool-close">
                        Cancel
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1040;
  }

  .modal-shopping-cart {
    z-index: 1050;
  }
  /* .modal-shopping-cart {
    z-index: 1085 !important;
  } */
  /* .modal-backdrop {
    z-index: 1070 !important;
  } */
`;

export default ShoppingCart;
