const router = require('express').Router();
const wilderController = require("../controllers/wilders");
const asyncHandler = require('express-async-handler')

router
  .route('/')
  .get(asyncHandler(wilderController.findAll))
  .post(asyncHandler(wilderController.create));

router
  .route('/:id')
  .get(asyncHandler(wilderController.findById))
  .put(asyncHandler(wilderController.update))
  .delete(asyncHandler(wilderController.delete));

module.exports = router;