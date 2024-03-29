const User = require ("../models/user");
const {hashPassword, comparePassword} = require("../helpers/auth");

const test = (req, res) => {
  res.json({ msg: "test is working" });
};

const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body
        // periksa apakah name terisi
        if(!name) {
            return res.json({
                error: 'name is required'
            })
        }

        // periksa apakah password benar
        if(!password || password.length < 6) {
            return res.json({
                error: 'password is required and should be at least 6 characters long'
            })
        }

        // periksa apakah email terisi
        const exist = await User.findOne({email})

        if(exist) {
            return res.json({
                error: 'email already exists'
            })
        }

        const hashedPassword = await hashPassword(password)

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        return res.json({user})
    } catch (error) {
        console.log(error);
    }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "No user found" });
    }

    const match = await comparePassword(password, user.password);
    if (match) {
      return res.json({ msg: "Login Success"});
    }
    return res.json({ error: "Wrong password" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  test,
  registerUser,
  loginUser,
};
