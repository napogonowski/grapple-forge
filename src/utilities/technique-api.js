import sendRequest from "./send-request";
const BASE_URL = "/api/techniques";

export async function getTechniqueByName(name) {
  return sendRequest(`${BASE_URL}/getByName/:name`);
}

export async function createTechnique(technique) {
  return sendRequest(BASE_URL, "POST", { technique });
}
