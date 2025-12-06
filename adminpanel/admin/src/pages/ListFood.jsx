import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './ListFood.css'
import { deleteFood, getFoodList } from '../service/FoodService';
const ListFood = () => {
  const [list , setList] = useState([]);
  const fetchList=async()=>{
  try {
     const data = await getFoodList();
     setList(data);
  } catch (error) {
    console.log("error while reading the foods");
  }
  }
  useEffect(()=>{
    fetchList();
  },[])
  const removeFood=async(foodId)=>{
   try {
     const success  = await deleteFood(foodId);
     if(success){
       alert('Food Removed')
       await fetchList();
     }
   } catch (error) {
    console.log(error,"error while deleting the food");
    
   }
  }
  return (
    
      <div className="py-5 row justify-content-center">
        <div className="col-11 card">
          <table className='table'>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                list.map((item, index)=>{
                  return(
                    <tr key={index}>
                      <td><img src={item.imageUrl} alt="" width={50} height={50} /></td>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
                      <td>&#8377;{item.price}</td>
                      <td className='text-danger'><i onClick={()=>removeFood(item.id)} className='bi bi-x-circle-fill'></i></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
  )
}

export default ListFood
