import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { addFood } from '../service/FoodService'

const AddFood = () => {
  const [image , setImage] = useState(false)
  const [data , setData] = useState({
    name :'',description:'' , category:'Biriyani', price:''
  })
  
  const onChangeHandler =(event)=>{
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data ,[name]: value}))
  }
  
  useEffect((e)=>{
    console.log(data)
  },[data])

  const onSubmitHandler=async(e)=>{
    e.preventDefault();
    if(!image){
      alert("please select an image");
      return;
    }
   try {
    await addFood(data, image);
    alert("food added successfully")
    setData({
       name :'',description:'' , category:'Biriyani', price:''
    })
    setImage(null)
   } catch (error) {
    console.log(error);
    alert("error adding food") 
   }
  }
  return (
   
<div className="container mt-2">
  <div className="row  ">
    <div className="card mx-2 col-md-6">
      <div className="card-body">
        <h2 className="mb-4">Add Food</h2>
        <form onSubmit={onSubmitHandler}>
           <div className="mb-3">
            <label htmlFor="image" className="form-label">
              <img src={image ? URL.createObjectURL(image): assets.upload} alt=""  width={98}/>
            </label>
            <input type="file" hidden className="form-control" id="image" onChange={(e)=>setImage(e.target.files[0])}    name='image'/>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" onChange={onChangeHandler} value={data.name} className="form-control" id="name" required name='name'/>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Description</label>
            <textarea onChange={onChangeHandler} value={data.description} className="form-control" id="description" name='description' rows="5" required></textarea>
          </div>
          <div className='mb-3'>
            <label htmlFor="category" className='form-label'>Category</label>
            <select onChange={onChangeHandler} value={data.category} name="category" id="category" className='form-control'>
              <option value="Biriyani">Biriyani</option>
              <option value="Cake">Cake</option>
              <option value="Pizza">Pizza</option>
              <option value="Rolls">Rolls</option>
              <option value="Salad">Salad</option>
              <option value="Ice Cream">Ice Cream</option>
              <option value="Burger">Burger</option>
            </select>
          </div>
           <div className="mb-3">
            <label htmlFor="price" className="form-label">Price</label>
            <input type="number" onChange={onChangeHandler} value={data.price} className="form-control" id="price" required name='price'/>
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    </div>
  </div>
</div>
  )
}

export default AddFood
