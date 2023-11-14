const Technique = require("../../models/technique");

module.exports = {
  getTechniqueByName,
  createTechnique,
};

async function getTechniqueByName(name) {
  // find the technique via the name
  // if match return match
  // if no match , return false ?
  try {
    const exisitingTechnique = await Technique.findOne({ name: name });
    if (exisitingTechnique) {
      return exisitingTechnique;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}

async function createTechnique(req, res) {
  try {
    const {name} = req.body.technique;
    const newTechnique = await Technique.create({
      name: name,
    });
    res.json(newTechnique);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
