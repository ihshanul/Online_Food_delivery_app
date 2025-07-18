import React from 'react'
import ExploreMenu from '../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../components/FoodDisplay/FoodDisplay'

const Explore = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className='col-md-6'>
            <form >
              <div className='input-group mb-3'>
                <select className='form-select mt-2' style={{'maxWidth':'150px'}}>
                  <option value="Biriyani">Biriyani</option>
                  <option value="Cake">Cake</option>
                  <option value="Burger">Burger</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Salad">Salad</option>
                  <option value="Ice cream">Ice cream</option>
                </select>
                <input type="text" className='form-control mt-2' placeholder='Search Your Favorite Dish'/>
                <button type='submit' className='btn btn-primary mt-2'><i className='bi bi-search'></i></button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <FoodDisplay />
    </div>
  )
}

export default Explore