import axios from "axios";

const apiurul = 'http://localhost:8080/api/foods';

export const fetchFoodList = async () => {
    try {
        const response = await axios.get(apiurul);
        return response.data;
    } catch (error) {
        console.error("Error fetching food list:", error);
        throw error;
    }
};
export const fetchFoodDetails = async(id)=>{
    try {
        const response =  await axios.get(apiurul+"/"+id);
        return response.data;
    } catch (error) {
        console.log('Error fetching Food Details :' , error);
        throw error;
    }
  }