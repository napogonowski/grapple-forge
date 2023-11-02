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
  const selectedId = editItem._id;
  return sendRequest(`${BASE_URL}/${selectedId}`, "PUT", editItem);
}
