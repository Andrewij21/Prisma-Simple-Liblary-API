const {
  borrowService: { get, create, remove },
} = require("../services");
const { reqres } = require("../utils");
let response;

const borrows = async (req, res) => {
  try {
    const data = await get();
    response = { ...reqres.success, data };
  } catch (error) {
    response = { ...reqres.server_error, error: error.toString() };
  }
  res.status(response.status).json(response);
};

const addBorrow = async (req, res) => {
  try {
    const data = req.body;
    const newBorrow = await create(data);
    response = { ...reqres.success, data: newBorrow };
  } catch (error) {
    response = { ...reqres.server_error, error: error.toString() };
  }
  res.status(response.status).json(response);
};

const deleteBorrow = async (req, res) => {
  try {
    const id = req.params.id;
    const borrow = await remove(id);
    response = { ...reqres.success, data: borrow };
  } catch (error) {
    response = { ...reqres.server_error, error: error.toString() };
  }
  res.status(response.status).json(response);
};
module.exports = { borrows, addBorrow, deleteBorrow };
