import * as sessionAPI from "./session-api";

export async function createItem(formData) {
  try {
    const res = await sessionAPI.createItem(formData);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserItems(user){
  console.log(user)
  try{
    const res = await sessionAPI.getUserItems(user);
    console.log("service log", res)
    return res; 

  } catch (error){
    console.log(error)
  }

}
