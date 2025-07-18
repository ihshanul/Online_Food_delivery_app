import React from "react";
import { Link } from "react-router-dom";

const FoodItem = ({ name, description, price, id, imageUrl }) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center">
      <div className="card" style={{ maxWidth: "320px" }}>
        <img src={imageUrl} alt={name} className="card-img-top" width={150} height={150} />
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
            <button className="btn btn-secondary btn-sm"><i className="bi bi-heart"></i></button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
