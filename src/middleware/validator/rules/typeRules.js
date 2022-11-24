const { body } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({ errorFormat: "minimal" });

const typeValidationRules = {
  createRules: [
    body("name").custom(async (value) => {
      if (!value || !value.trim()) {
        return Promise.reject("Name cannot be empty");
      }
      const isType = await prisma.type.findUnique({
        where: {
          name: value.toLowerCase(),
        },
      });
      if (isType) {
        return Promise.reject("Type already exist");
      }
    }),
  ],
};

module.exports = typeValidationRules;
