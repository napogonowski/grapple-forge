import * as sessionAPI from "./session-api";

export async function createItem(formData) {
  try {
    const res = await sessionAPI.createItem(formData);
    return res;
  } catch (error) {
    console.log(error);
  }
}
