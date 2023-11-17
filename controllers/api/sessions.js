const Session = require("../../models/session");

module.exports = {
  createItem,
  index,
  show,
  delete: deleteOne,
  update,
  getLastItem,
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
    const items = await Session.find({ user: req.user._id }).populate(
      "technique",
      "name"
    );
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

async function getLastItem(req, res) {
  try {
    
    console.log("we are getting into the function ");
    const lastItem = await Session.findOne({ user: req.user._id })
      .sort({ createdAt: -1 })
      .populate("technique", "name")
      .exec();
    console.log("session controller log", lastItem);

    // guard
    if (!lastItem) {
      return res.status(404).json({ message: "No Session Found" });
    }
    console.log("controller log", lastItem);
    res.json(lastItem);
  } catch (error) {
    console.error("Error in getLastItem:", error);
    res.status(500).json({ message: "Server Error" });
  }
}
