import axios from "axios";

const apiurl = "http://localhost:8080/api/foods";

export const addFood = async (foodData, image) => {

  const formData = new FormData();
  formData.append("food", JSON.stringify(foodData));
  formData.append("file", image);

  try {
    const response = await axios.post(apiurl, formData, {headers: { "Content-Type": "multipart/form-data" },
    });
  } catch (error) {
    console.log("Error" , error);
    throw error;
  }
};
export const getFoodList = async()=>
{
  try {
    const response =await axios.get(apiurl);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export const deleteFood =async(foodId)=>{
  try {
    const response =  await axios.delete(apiurl+"/"+foodId);
    return response.status === 204;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
