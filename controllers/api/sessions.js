const Session = require("../../models/session");

module.exports = {
  createItem,
  index,
  show,
  delete: deleteOne,
  update,
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

async function index(req, res) {
  try {
    const items = await Session.find({ user: req.user._id });
    res.json(items);
  } catch (error) {
    console.log(error);
  }
}

async function show(req, res) {
  try {
    const item = await Session.findById(req.params.id);
    res.json(item);
  } catch (error) {
    console.log(error);
  }
}

async function deleteOne(req, res) {
  try {
    const selectedItem = await Session.findById(req.params.id);
    await selectedItem.deleteOne();
    const newSessionList = await Session.find({ user: req.params._id });
    res.json(newSessionList);
  } catch (error) {
    console.log(error);
  }
}

async function update(req, res) {
  try {
    const itemId = req.params.id;
    console.log("controller", itemId);
    const updatedItem = await Session.findByIdAndUpdate(itemId, req.body, {
      new: true,
    });
    res.json(updatedItem);
  } catch (error) {
    console.log(error);
  }
}
