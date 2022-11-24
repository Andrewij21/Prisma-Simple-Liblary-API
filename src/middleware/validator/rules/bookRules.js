const { body } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({ errorFormat: "minimal" });

const bookValidationRules = {
  createRules: [
    body("title").custom(async (value) => {
      if (!value || !value.trim()) {
        return Promise.reject("Title cannot be empty");
      }
      const isTitle = await prisma.book.findUnique({
        where: {
          title: value.toLowerCase(),
        },
      });
      if (isTitle) {
        return Promise.reject("Title already exist");
      }
    }),
    body("author").custom(async (value) => {
      if (!value || value == " ") {
        return Promise.reject("author cannot be empty");
      }
      const isauthor = await prisma.author.findUnique({
        where: {
          id: parseInt(value),
        },
      });
      if (!isauthor) {
        return Promise.reject("Author does not exist");
      }
    }),
    body("type").custom(async (value) => {
      if (!value || value == " ") {
        return Promise.reject("Type cannot be empty");
      }
      const istype = await prisma.type.findUnique({
        where: {
          id: parseInt(value),
        },
      });
      if (!istype) {
        return Promise.reject("Type does not exist");
      }
    }),
  ],
};

module.exports = bookValidationRules;
