const user = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// get all users
// localhost:3000/api/users/all (get)
async function getAllUsers(req, res) {
  const allusers = await user.find();
  return res.status(200).json(allusers);
}

// get user by id
// localhost:3000/api/users/:id (get)
async function getUserById(req, res) {
  const { id } = req.params;
  //   const theuser = user.find({ _id: id }); // array
  //   const theuser = user.findOne({ _id: id }); // element 1
  const theuser = await user.findById(id); // element 1
  return res.status(200).json(theuser);
}

// Effacer l'user by id
// localhost:3000/api/users/:id (delete)
async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const deleteuser = await user.findByIdAndDelete(id);
    if (!deleteuser) return res.status(401).json({ message: `id incorrect` });
    return res
      .status(200)
      .json({ message: `utilisateur supprimé avec succès` });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `une erreur s'est produite ${err.message}` });
  }
}

// update user by id
// localhost:3000/api/users/:id (put)
async function updateUser(req, res) {
  const { id } = req.params;
  const { liencv } = req.body;
  await user.findByIdAndUpdate(id, {
    $set: { liencv },
  });
  return res.status(200).json({ message: "user updated" });
}

//REGISTER / LOGIN
// creation l'user
// localhost:3000/api/users (post)
const registerUser = async (req, res) => {
  try {
    const { prenom, nom, email, password, DateNaiss, tel, liencv, Etat } =
      req.body;
    const existantUser = await user.findOne({
      $or: [{ email: email }],
    });
    if (existantUser)
      return res
        .status(402)
        .json({ messaage: "email or username already exist" });

    const newUser = new user({
      prenom: prenom,
      nom: nom,
      email: email,
      password: password,
      DateNaiss: DateNaiss,
      tel: tel,
      liencv: liencv,
      Etat: Etat,
      password: bcrypt.hashSync(password, 10),
    });

    await newUser.save();
    return res.status(201).json(newUser);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existant = await user.findOne({ email: email.toLowerCase() });
    if (!existant)
      return res.status(404).json({ message: "utilisateur non trouvé" });
    const comparedPassword = await bcrypt.compare(password, existant.password);
    if (!comparedPassword)
      return res.status(400).json({ message: "invalid credentials" });

    const token = jwt.sign({ id: existant._id, role: "user" }, "PRIVATE_KEY", {
      expiresIn: "7d",
    });
    return res.status(200).json(token);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const changepassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { currentPassword, newPassword } = req.body;

    const existantUser = await user.findById(id);
    const comparePassword = bcrypt.compareSync(
      currentPassword,
      existantUser.password
    );
    if (!comparePassword)
      return res.status(400).json({
        message: `le mot de passe que vous avez saisie est incorrect`,
      });
    existantUser.password = bcrypt.hashSync(newPassword, 10);
    await existantUser.save();
    return res
      .status(200)
      .json({ message: `mot de passe mis à jour avec succès` });
  } catch (err) {
    return res
      .status(500)
      .json({ message: `une erreur s'est produite ${err.message}` });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  deleteUser,
  registerUser,
  updateUser,
  registerUser,
  login,
  changepassword,
};
