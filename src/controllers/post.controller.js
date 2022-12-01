const Post = require("../models/Post");

const getPosts = async (req, res) => {
  try {
    const post = await Post.find({}).lean();

    res.status(200).json({
      post,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};
const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPostU = async (req, res) => {
  //{owner_id} as params
  try {
    const id = req.params.id;
    const post = await Post.find({ owner_id: id }).lean();
    res.status(200).json({ post });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};
const getPostN = async (req, res) => {
  //{display_name} as params
  try {
    const name = req.params.name;
    const post = await Post.find({ display_name: name }).lean();
    res.status(200).json({ post });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};
const getPostC = async (req, res) => {
  //{category_id} as params
  try {
    const id = req.params.id;
    const post = await Post.find({ category_id: id }).lean();
    res.status(200).json({ post });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

const createPost = async (req, res) => {
  // { owner_id,img_url,display_name,description_id,category_id,price}
  try {
    const post = await Post.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getRecentPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deletepost = async (req, res) => {
  //{ id } as params
  try {
    await Post.deleteOne({
      _id: req.params.id,
    });
    return res.status(200).json("post eliminado");
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};

const updatepost = async (req, res) => {
  //{ id } as params
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Post.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  getPostU,
  getPostN,
  getPostC,
  getRecentPosts,
  updatepost,
  deletepost,
};
