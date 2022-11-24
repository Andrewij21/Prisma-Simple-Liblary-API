const {
  bookService: { get, create },
} = require("../services");
const { reqres } = require("../utils");
let response;

const books = async (req, res) => {
  try {
    const books = await get();
    response = { ...reqres.success, data: books };
  } catch (error) {
    response = { ...reqres.server_error, error: error.toString() };
  }
  res.status(response.status).json(response);
};

const addBook = async (req, res) => {
  try {
    const data = req.body;
    const book = await create(data);
    if (book.status) {
      response = { ...reqres.incomplete_body, data: book.message };
    } else {
      response = { ...reqres.success, data: book };
    }
  } catch (error) {
    response = { ...reqres.server_error, error: error.toString() };
  }
  res.status(response.status).json(response);
};

module.exports = { books, addBook };
