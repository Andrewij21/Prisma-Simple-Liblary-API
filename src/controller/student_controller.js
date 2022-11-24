const {
  studentService: { signIn, get, remove },
} = require("../services");
const { reqres } = require("../utils");
let response;

const register = async (req, res) => {
  try {
    const data = req.body;
    const student = await signIn(data);
    response = { ...reqres.success, data: student };
  } catch (error) {
    response = { ...reqres.server_error, error: error.toString() };
  }
  res.status(response.status).json(response);
};

const students = async (req, res) => {
  try {
    const students = await get();
    response = { ...reqres.success, data: students };
  } catch (error) {
    response = { ...reqres.server_error, error: error.toString() };
  }
  res.status(response.status).json(response);
};

const removeStudent = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const student = await remove(id);
    response = { ...reqres.success, data: student };
  } catch (error) {
    response = { ...reqres.server_error, error: error.toString() };
  }
  res.status(response.status).json(response);
};
module.exports = { register, students, removeStudent };
