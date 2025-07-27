import React, { useState } from 'react'
import ExploreMenu from '../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay/FoodDisplay'

const Explore = () => {
  const [category , setCategory] = useState('All');
  const [searchtext , setSearchText] = useState('');
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className='col-md-6'>
            <form onSubmit={(e)=> e.preventDefault()}>
              <div className='input-group mb-3'>
                <select className='form-select mt-2' onChange={(e)=>setCategory(e.target.value)} style={{'maxWidth':'150px'}}>
                  <option value="Biriyani">Biriyani</option>
                  <option value="Cake">Cake</option>
                  <option value="Burger">Burger</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Salad">Salad</option>
                  <option value="Ice cream">Ice cream</option>
                </select>
                <input type="text" className='form-control mt-2' placeholder='Search Your Favorite Dish' 
                  onChange={(e)=>setSearchText(e.target.value)} value={searchtext}/>
                <button type='submit' className='btn btn-primary mt-2'><i className='bi bi-search'></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FoodDisplay category={category} searchText={searchtext}/>
    </div>
  )
}

export default Explore