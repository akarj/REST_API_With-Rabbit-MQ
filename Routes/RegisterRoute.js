const router = require("express").Router();
const Register = require("../Model/RegisterModel");

router.post("/setRecord", async (req, res) => {
  const newUserNameAndEmail = new Register(req.body);
  try {
    console.log(req.body);
    const { _id } = await newUserNameAndEmail.save();
    res.status(200).json({ _id });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/getRecord", async (req, res) => {
  try {
    const userNameAndEmail = await Register.findOne({ _id: req.body.id });
    !userNameAndEmail &&
      res
        .status(404)
        .json({ message: `user with ${req.body.id} does not exist` });
    const { name, email } = userNameAndEmail;
    res.status(200).json({ name, email });
  } catch (err) {
    res.status(500).json({ message: "Error in retrieving the user", err });
  }
});

router.get("/", async (req, res) => {
  try {
    res.status(200).json("get Request working");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
