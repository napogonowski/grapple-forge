import sendRequest from "./send-request";
const BASE_URL = "/api/sessions"


export async function createItem(formData){
  return sendRequest(BASE_URL, "POST", {formData: formData})
}