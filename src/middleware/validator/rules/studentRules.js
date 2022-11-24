const { body } = require("express-validator");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({ errorFormat: "minimal" });

// id        Int       @id @default(autoincrement())
// email     String    @unique
// username  String    @db.VarChar(50)
// gender    Gender    @default(NONE)
// classroom String
// birthDate DateTime?
// borrow    Borrows[]

const studentValidationRules = {
  createRules: [
    body("email")
      .isEmail()
      .withMessage("Email is invalid")
      .custom(async (value) => {
        const isEmail = await prisma.student.findUnique({
          where: {
            email: value,
          },
        });
        if (isEmail) {
          return Promise.reject("Email already exist");
        }
      }),
    body("username").custom(async (value) => {
      console.log("username", value);
      if (!value || !value.trim()) {
        return Promise.reject("Title cannot be empty");
      }
    }),
    body("classroom").custom(async (value) => {
      console.log("classroom", value);
      if (!value || !value.trim()) {
        return Promise.reject("Classroom cannot be empty");
      }
    }),
    body("birthDate").isDate().withMessage("Data is invalid"),
  ],
};

module.exports = studentValidationRules;
