import axios from "axios";

const apiUrl = "http://localhost:8080/api/foods";

export const addFood = async (foodData, image) => {

  const formData = new FormData();
  formData.append("food", JSON.stringify(foodData));
  formData.append("file", image);

  try {
    await axios.post(apiUrl, formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
  } catch (error) {
    console.log(error);
    alert("Error adding Food");
  }
};


export const getFoodList=async()=>{
  try {
     const response = await axios.get(apiUrl);
      return response.data;         
  } catch (error) {
    console.log("Error while fetching the food",error)
    throw error
  }
}

export const deleteFood=async(foodId)=>{
  try {
     const response =await axios.delete(apiUrl+"/"+foodId);    
     return  response.status === 204
  } catch (error) {
    console.log("error while deleting the food" , error);
    throw error
  }
}