import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import { addFood } from "../../service/FoodService";
import { toast } from "react-toastify";
const AddFood = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Biriyani",
  });

  const onChangeHanlder = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!image) {
      toast.error("Please select an image.");
      return;
    }
    try {
      await addFood(data, image);
      toast.success('Fooded added successfully.');
      setData({name:'',description:'',category:'Biriyani', price:''});
      setImage(false);
    } catch (error) {
      toast.error('Error adding food');
    }
    
  
  };

  return (
    <div className="mx-2 mt-2">
      <div className="row ">
        <div className=" card col-md-4">
          <div className="card-body">
            <h2 className="mb-4">Add Food</h2>
            <form onSubmit={onSubmitHandler}>
              <div className="mb-3">
                <label htmlFor="image" className="form-label">
                  <img
                    src={image ? URL.createObjectURL(image) : assets.upload}
                    width={98}
                    alt=""
                  />
                </label>
                <input
                  type="file"
                  name="image"
                  className="form-control"
                  id="image"
                  onChange={(e) => setImage(e.target.files[0])}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Chicken biriyani"
                  className="form-control"
                  id="name"
                  onChange={onChangeHanlder}
                  value={data.name}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  name="description"
                  placeholder="Write content here"
                  id="description"
                  rows="5"
                  onChange={onChangeHanlder}
                  value={data.description}
                  required
                ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  name="category"
                  id="category"
                  className="form-control"
                  onChange={onChangeHanlder}
                  value={data.category}
                >
                  <option value="Biriyani">Biriyani</option>
                  <option value="Cake">Cake</option>
                  <option value="Burger">Burger</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Salad">Salad</option>
                  <option value="Ice cream">Ice cream</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="&#8377;200"
                  id="price"
                  className="form-control"
                  onChange={onChangeHanlder}
                  value={data.price}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
