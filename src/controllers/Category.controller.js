const Category = require("../models/Category");

const createCategory = async (req, res) => {
  //{display_name,img_url,description }
  try {
    const post = await Category.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error });
  }
};
const getcategory = async (req, res) => {
  try {
    const category = await Category.find({}).lean();

    res.status(200).json({
      category,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

const deletecategory = async (req, res) => {
  //{id } as params
  try {
    await Category.deleteOne({
      _id: req.params.id,
    });
    return res.status(200).json("Categoria eliminado");
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

const updatecategory = async (req, res) => {
  //{id } as params
  try {
    const _id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Category.findByIdAndUpdate(_id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = {
  createCategory,
  getcategory,
  deletecategory,
  updatecategory,
};
