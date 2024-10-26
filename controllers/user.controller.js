const registerUser = (req, res) => {
  try {
    const { name, email, password, dob } = req.body;

    const newuser = {
      name,
      email,
      password,
      dob,
    };

    res.status(201).json({
      message: "New user created",
      newuser,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};


const loginUser=(req,res)=>{
  
    try {
      const { email, password } = req.body;

      if (email === "jillur.cse.bd@gmail.com" && password === "12345678") {
        res.status(200).json({
          message: "user was logged in",
        });
      } else {
        res.status(400).json({
          message: "Email & Password wrong",
        });
      }
    } catch (error) {
      res.json({
        message: error.message,
      });
    }
  }


module.exports = { registerUser,loginUser };
