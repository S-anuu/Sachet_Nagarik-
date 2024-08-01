var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/sign-in',function(req, res, next){
  res.render('signIn', {title: 'Sign In'});
});

// POST route for sign-in
router.post('/sign-in', async (req, res, next) => {
  const { username, password } = req.body;

  try {
    // Replace with your user authentication logic
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).render('signIn', { title: 'Sign In', error: 'Invalid credentials' });
    }

    // If using sessions
    req.session.user = user;
    res.redirect('/dashboard'); // Redirect to a dashboard or other authenticated route

    // If using JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });

  } catch (err) {
    next(err);
  }
});


module.exports = router;