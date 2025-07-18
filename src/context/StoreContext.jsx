import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { fetchFoodList } from "../service/FoodService";

export const StoreContext = createContext(null);

export const StoreContextProvider =(props)=>{
    const [foodList , setFoodlist]= useState([]);

  

    const contextValue ={
        foodList
    }
    useEffect(()=>{
        async function loadFood(){
        const data = await fetchFoodList();
        setFoodlist(data);
        }
        loadFood();
    },[])




    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}