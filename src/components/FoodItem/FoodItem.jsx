import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ name, description, price, id, imageUrl }) => {
  const {increaseQty , decreaseQty , quantities} =useContext(StoreContext);
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
      <div  className="card" style={{ maxWidth: "320px" , "textDecoration": "none" }}>
        <Link to={`/food/${id}`}><img src={imageUrl} alt={name} className="card-img-top" width={150} height={150} />
</Link>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="h5 mb-0">&#8377;{price}</span>
            <div>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light">
            <Link className="btn btn-primary btn-sm" to={`/food/${id}`}>View Food</Link>
            {quantities[id]> 0 ? (
              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-danger btn-sm" onClick={()=>decreaseQty(id)}><i className="bi bi-dash-circle"></i></button>
                <span className="fw-bold">{quantities[id]}</span>
                <button className="btn btn-success btn-sm" onClick={()=>increaseQty(id)}><i className="bi bi-plus-circle"></i></button>
              </div>
            ):(
              <button className="btn btn-primary btn-sm" onClick={()=>increaseQty(id)}><i className="bi bi-plus-circle"></i></button>
            )}
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
