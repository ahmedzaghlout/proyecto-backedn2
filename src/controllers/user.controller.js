const User = require("../models/User");

const register = async (req, res) => {
     //{ username, password, displayname }
  const isNew = await User.findOne({ username: req.body.username });
  try {
    if (!isNew) {
      const user = await User.create(req.body);
      console.log(User);
      res.status(200).json(user);
    } else {
      res.status(208).json({ msg: "User already exists" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user)
  }
  catch (error) {
    res.status(500).json({ message: error.message })
  }

}


const deleteUser = async (req, res) => {
      //{ id } as params
  try {

    await User.deleteOne({
      _id: req.params.id,
    });
    return res.status(200).json("usuario eliminado");
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
}

const updateUser = async (req, res) => {
        //{ id  } as params
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await User.findByIdAndUpdate(
      id, updatedData, options
    )

    res.send(result)
  }
  catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const getUsers = async (req, res) => {
  try {

    const users = await User.find({}).lean();

    res.status(200).json({
      users,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message });
  }
};


const login = async (req, res) => {
  //{ username, password }
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (!user) {
      res.status(404).json({ msg: "Not exist!!" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};


const loginToken =  async (req, res) => {
    //{ id }
  const id = req.params.id;
  try {
    const user = await User.findById(req.params.id);
    res.json('login user'+user)
   
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
  
};


const prevLogin = async (req, res) => {
  const user = await User.find({ _id: req.body.user_id });
  try {
    if (!user) {
      res.status(200).json(user);
    } else {
      res.status(208).json({ msg: "User already exists" });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = { register, getUsers, login, prevLogin, getUser, deleteUser,updateUser,loginToken };
