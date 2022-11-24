const {
  authorService: { get, create, remove },
} = require("../services");
const { reqres } = require("../utils");
let response;

const authors = async (req, res) => {
  try {
    const types = await get();
    response = { ...reqres.success, data: types };
  } catch (error) {
    response = { ...reqres.server_error, error: error.toString() };
  }
  res.status(response.status).json(response);
};

const addAuthor = async (req, res) => {
  try {
    const data = req.body;
    const author = await create(data);
    if (author.status) {
      response = { ...reqres.conflict, data: author.message };
    } else {
      response = { ...reqres.success, data: author };
    }
  } catch (error) {
    response = { ...reqres.server_error, error: error.toString() };
  }
  res.status(response.status).json(response);
};

const deleteAuthor = async (req, res) => {
  try {
    const id = req.params.id;
    const author = await remove(id);
    response = { ...reqres.success, data: author };
  } catch (error) {
    response = { ...reqres.server_error, error: error.toString() };
  }
  res.status(response.status).json(response);
};
module.exports = { authors, addAuthor, deleteAuthor };
