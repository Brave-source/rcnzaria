const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// REGISTER
router.post('/', async(req, res) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({ ...req.body, password: hash });
    
        await newUser.save();
        res.status(200).send("User has been created!");
      } catch (err) {
        res.status(500).json(err);
      }
});

// LOGIN
router.post('/login', async(req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) return next(createError(404, "User not found!"));
    
        const isCorrect = await bcrypt.compare(req.body.password, user.password);
    
        if (!isCorrect) return next(createError(400, "Wrong Credentials!"));
    
        const { password, ...others } = user._doc;
    
        res.status(200).json(others);
      } catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router;