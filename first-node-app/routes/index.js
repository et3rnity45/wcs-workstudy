const router = require('express').Router();
const wilderRoutes = require('./wilder');

router.use('/api/wilders', wilderRoutes);

router.use((req, res) => {
  res.status(404);
  res.send({ success: false, message: "Wrong adress" });
})

module.exports = router;