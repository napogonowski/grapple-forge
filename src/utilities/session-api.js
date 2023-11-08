import sendRequest from "./send-request";
const BASE_URL = "/api/sessions";

export async function createItem(formData) {
  return sendRequest(BASE_URL, "POST", { formData: formData });
}

export async function getUserItems() {
  return sendRequest(BASE_URL);
}

export async function getOneItem(selectedId) {
  return sendRequest(`${BASE_URL}/${selectedId}`);
}

export async function deleteOneItem(selectedId) {
  return sendRequest(`${BASE_URL}/${selectedId}`, "DELETE");
}

export async function editItem(editItem) {
  // console.log("API log ", editItem);
  const selectedId = editItem._id;
  // console.log("api", selectedId);
  return sendRequest(`${BASE_URL}/${selectedId}`, "PUT", editItem);
}

export async function getLastItem(){
  return sendRequest(`${BASE_URL}/last`)
}
