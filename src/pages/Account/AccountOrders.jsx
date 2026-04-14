import React from "react";
import { Link } from "react-router-dom";

const AccountOrders = () => {
  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <div className="breadcrumbtitle">
            <h2>My Orders</h2>
          </div>
        </div>
      </div>

      <div className="flat-spacing-8">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="wrap-sidebar-account">
                <ul className="my-account-nav">
                  <li>
                    <Link to="/account" className="my-account-nav-item">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <span className="my-account-nav-item active">Orders</span>
                  </li>
                  <li>
                    <Link to="/account-address" className="my-account-nav-item">
                      Address
                    </Link>
                  </li>
                  <li>
                    <Link to="/account-edit" className="my-account-nav-item">
                      Account Details
                    </Link>
                  </li>

                  <li>
                    <Link to="/login" className="my-account-nav-item">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="my-account-content account-order">
                <div className="wrap-account-order">
                  <table>
                    <thead>
                      <tr>
                        <th className="fw-6">Order</th>
                        <th className="fw-6">Date</th>
                        <th className="fw-6">Status</th>
                        <th className="fw-6">Total</th>
                        <th className="fw-6">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="ss-order-item">
                        <td>#123</td>
                        <td>August 1, 2025</td>
                        <td>On hold</td>
                        <td>$200.0 for 1 items</td>
                        <td>
                          <to to="/account-orders-details">
                            <span>View</span>
                          </to>
                        </td>
                      </tr>
                      <tr className="ss-order-item">
                        <td>#345</td>
                        <td>August 2, 2025</td>
                        <td>On hold</td>
                        <td>$300.0 for 3 items</td>
                        <td>
                          <to to="/account-orders-details">
                            <span>View</span>
                          </to>
                        </td>
                      </tr>
                      <tr className="ss-order-item">
                        <td>#567</td>
                        <td>August 3, 2025</td>
                        <td>On hold</td>
                        <td>$400.0 for 2 items</td>
                        <td>
                          <to to="/account-orders-details">
                            <span>View</span>
                          </to>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountOrders;
