import * as techniqueAPI from "./technique-api";

export async function getTechniqueByName(name) {
  try {
    const res = await techniqueAPI.getTechniqueByName(name);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function createTechnique(technique) {
  try {
    const res = await techniqueAPI.createTechnique(technique);
    return res;
  } catch (error) {
    console.log(error);
  }
}

export async function getLastItem() {
  try {
    const res = await techniqueAPI.getLastItem();
    return res;
  } catch (error) {
    console.log(error);
  }
}
