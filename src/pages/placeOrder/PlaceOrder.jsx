import React, { useContext } from "react";
import "./PlaceOrder.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { CalculateCartTotals } from "../../util/CartUtils";
const PlaceOrder = () => {
  const {foodList , quantities , setQuantities ,}=useContext(StoreContext);
   const cartItems = foodList.filter((food) => quantities[food.id] > 0);

  const {subTotal , shipping , tax , total}=CalculateCartTotals(cartItems , quantities);
  return (

    <div className="container ">
        <main>
          <div className=" text-center ">
            <img src={assets.logo} alt="" className="d-block mx-auto " width={130} height={130} />
          </div>
          <div className="row g-5">
            <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span className="badge bg-primary rounded-pill">{cartItems.length}</span>
              </h4>
              <ul className="list-group mb-3">
              {
                cartItems.map(item =>(
                  <li className="list-group-item d-flex justify-content-between">
                  <div>
                    <h6 className="my-0">{item.name}</h6>
                    <small className="text-body-secondary">
                      Qty : {quantities[item.id]}
                    </small>
                  </div>
                  <span className="text-body-secondary">&#8377;{item.price * quantities[item.id]}</span>
                </li>
                ))
              }
                
                <li className="list-group-item d-flex justify-content-between ">
                  <div>
                    <span >Shipping</span>
                  </div>
                  <span className="text-body-secondary">&#8377;{subTotal === 0? 0.00 : shipping.toFixed(2)}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between ">
                  <div>
                    <span>Tax</span>
                  </div>
                  <span className="text-body-secondary">{tax.toFixed(2)}</span>
                </li>
               
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (INR)</span>
                  <strong>&#8377;{total.toFixed(2)}</strong>
                </li>
              </ul>
            </div>

            <div className="col-md-7 col-lg-8 ">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" noValidate>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="ihshan"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">
                      Last name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      placeholder="halq"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <div className="input-group has-validation">
                      <span className="input-group-text">@</span>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="you@gmail.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="phone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="phone"
                      placeholder="9876543210"
                      required
                    />
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <select className="form-select" id="country" required>
                      <option value="">Choose...</option>
                      <option>India</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <select className="form-select" id="state" required>
                      <option value="">Choose...</option>
                      <option>Chennai</option>
                      <option>Bangluru</option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      placeholder="98765"
                      required
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <hr className="my-4" />
                <button disabled={cartItems.length ===0} className="w-100 btn btn-primary btn-lg" type="submit">
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
        </main>
    </div>
  );
};

export default PlaceOrder;
