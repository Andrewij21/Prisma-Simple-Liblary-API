const { body } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({ errorFormat: "minimal" });

const authorValidationRules = {
  createRules: [
    body("name").custom(async (value) => {
      if (!value || !value.trim()) {
        return Promise.reject("Name cannot be empty");
      }
      const isName = await prisma.author.findUnique({
        where: {
          name: value.toLowerCase(),
        },
      });
      if (isName) {
        return Promise.reject("name already exist");
      }
    }),
  ],
};

module.exports = authorValidationRules;
