const createError = require('http-errors')
const WilderModel = require("../models/Wilder");

function isValidId(id) {
  return id.match(/^[0-9a-fA-F]{24}$/)
}

function isBodyEmpty(body) {
  return Object.keys(body).length === 0;
}

module.exports = {
  create: async (req, res) => {
    if (isBodyEmpty(req.body)) throw createError(400, 'Wilder can not be empty');
    
    await WilderModel.init();
    const wilder = new WilderModel(req.body);
    const result = await wilder.save();

    res.json({ success: true, result });
  },

  findOne: async (req, res) => {
    const id = req.params.id;
    
    if (!isValidId(id)) throw createError(404, 'Wilder not found with id : ' + id + ' (invalid id)');

    const result = await WilderModel.findById(id);

    if (!result) throw createError(404, 'Wilder not found with id : ' + id);
    res.json({ success: true, result });
  },

  findAll: async (req, res) => {
    const result = await WilderModel.find();

    res.json({ success: true, result });
  },

  update: async (req, res) => {
    const id = req.params.id;

    if (!isValidId(id)) throw createError(404, 'Wilder not found with id : ' + id + ' (invalid id)');
    if (isBodyEmpty(req.body)) throw createError(400, 'Provide ');

    const result = await WilderModel.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!result) throw createError(404, 'Wilder not found with id : ' + id);
    res.json({ success: true, result });
  },

  delete: async (req, res) => {
    id = req.params.id;

    if (!isValidId(id)) throw createError(404, 'Wilder not found with id : ' + id + ' (invalid id)');

    const result = await WilderModel.findByIdAndRemove(req.params.id);

    if (!result) throw createError(404, 'Wilder not found with id : ' + id);
    res.json({ success: true, result });
  },

  deleteAll: async (req, res) => {
    const result = await WilderModel.deleteMany({});

    res.json({ success: true, result });
  }
}