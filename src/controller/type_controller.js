const {
  typeService: { get, create },
} = require("../services");
const { reqres } = require("../utils");
let response;

const types = async (req, res) => {
  try {
    const types = await get();
    response = { ...reqres.success, data: types };
  } catch (error) {
    response = { ...reqres.server_error, error: error.toString() };
  }
  res.status(response.status).json(response);
};

const addType = async (req, res) => {
  try {
    const data = req.body;
    const types = await create(data);
    response = { ...reqres.success, data: types };
  } catch (error) {
    response = { ...reqres.server_error, error: error.toString() };
  }
  res.status(response.status).json(response);
};

module.exports = { types, addType };
