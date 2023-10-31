const Session = require("../../models/session");

module.exports = {
  createItem,
};

async function createItem(req, res) {
  try {
    const { classType, date, technique, notes } = req.body.formData;
    const newEntry = await Session.create({
      classType: classType,
      date: date,
      technique: technique,
      notes: notes,
      user: req.user._id,
    });
    res.json(newEntry);
  } catch (error) {
    console.log(error);
  }
}
