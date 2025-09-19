import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchFoodDetails } from "../service/FoodService";
import { StoreContext } from "../context/StoreContext";

const FoodDetails = () => {
  const {increaseQty } =useContext(StoreContext)
  const navigate = useNavigate()
  const { id } = useParams();

  const [data , setData] = useState({})
  
  useEffect(()=>{
    const loadFoodDetails = async()=>{
      try {
      const foodData = await fetchFoodDetails(id);
      setData(foodData);
      } catch (error) {
        toast.error("Error Displaying the Food Details.")
      }
    }
    loadFoodDetails();
  },[id])

  const addToCart =()=>{
    increaseQty(data.id);
    navigate('/cart');
  }
  return (
    <section className="py-5">
      <div className="container py-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img src={data.imageUrl} alt="...." className="cart-img-top mb-5 mb-md-0" />
          </div>
          <div className="col-md-6">
            <div className="small fs-5 mb-1">Category : <span className="badge text-bg-warning">{data.category}</span>
            </div>
            <h1 className="diplay-5 fw-bolder">{data.name}</h1>
            <div className="fs-5 mb-2">
              <span> &#8377;{data.price}.00</span>
            </div>
            <p className="lead">{data.description}</p>
            <div className="d-flex">
              <button onClick={addToCart}  className="btn btn-outline-dark flex-shrink-0" type="button">
                <i className="bi-cart-fill me-1"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetails;
