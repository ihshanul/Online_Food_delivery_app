import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { fetchFoodList } from "../service/FoodService";

export const StoreContext = createContext(null);

export const StoreContextProvider =(props)=>{
    const [foodList , setFoodlist]= useState([]);
    const [quantities, setQuantities] = useState({});

    const increaseQty = (foodId)=>{
        setQuantities((prev)=>({...prev , [foodId] :(prev[foodId] || 0)+1 }))
    }
    const decreaseQty = (foodId)=>{
        setQuantities((prev)=>({...prev , [foodId] :(prev[foodId] > 0 ? prev[foodId] -1 : 0)}))
    }
    const removeFromCart = (foodId)=>{
        setQuantities((prevQuantities)=>{
            const updatedQuantities ={...prevQuantities};
            delete updatedQuantities[foodId];
            return updatedQuantities
    })
    }

    const contextValue ={
        foodList,
        removeFromCart,
        quantities,
        increaseQty,
        decreaseQty
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