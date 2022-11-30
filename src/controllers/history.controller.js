const History = require("../models/History");

const getHistory = async (req, res) => {
  try {
    const history = await History.find({ user_id: req.params.user_id });
    res.status(200).json(history);
  } catch (error) {
    res.status(500).json({ error });
  }
};
module.exports = getHistory;
