const User = require ("../models/user");

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

        const user = await User.create({
            name,
            email,
            password
        })

        return res.json({user})
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
  test,
  registerUser,
};
