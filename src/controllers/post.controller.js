const Post = require("../models/Post");

const getPosts = async (req, res) => {
  const { post_id } = req.query;
  try {
    if (post_id) {
      const posts = await Post.findById(post_id);
      res.status(200).json(posts);
    } else {
      const { user_id } = req.query;
      const posts = await Post.find({ owner_id: user_id });
      res.status(200).json(posts);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createPost = async (req, res) => {
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
  try {

    await Post.deleteOne({
      _id: req.params.id,
    });
    return res.status(200).json("post eliminado");
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
}

const updatepost = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Post.findByIdAndUpdate(
      id, updatedData, options
    )

    res.send(result)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
}

module.exports = { createPost, getPosts, getRecentPosts,updatepost,deletepost };
