const Technique = require("../../models/technique");

module.exports = {
  getTechniqueByName,
  createTechnique,
  getLastItem,
};

async function getTechniqueByName(name) {
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
    const { name } = req.body.technique;
    const newTechnique = await Technique.create({
      name: name,
    });
    res.json(newTechnique);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

async function getLastItem(req, res) {
  try {
    const mostRecent = await Technique.findOne({})
      .sort({ createdAt: -1 })
      .exec();
    res.json(mostRecent);
  } catch (error) {
    console.log(error);
  }
}
