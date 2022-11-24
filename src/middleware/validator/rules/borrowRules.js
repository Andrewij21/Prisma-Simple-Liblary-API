const { body } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({ errorFormat: "minimal" });

const authorValidationRules = {
  createRules: [
    body("studentId").custom(async (value) => {
      if (!value || value == " ") {
        return Promise.reject("studentId cannot be empty");
      }
      const isStudentId = await prisma.student.findUnique({
        where: {
          id: parseInt(value),
        },
      });
      if (!isStudentId) {
        return Promise.reject("Student id does not exist");
      }
    }),
    body("bookId").custom(async (value) => {
      if (!value || value == " ") {
        return Promise.reject("Book Id cannot be empty");
      }
      const isBookId = await prisma.book.findUnique({
        where: {
          id: parseInt(value),
        },
      });
      if (!isBookId) {
        return Promise.reject("Book id does not exist");
      }
    }),
  ],
};

module.exports = authorValidationRules;
