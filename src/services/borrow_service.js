const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({ errorFormat: "minimal" });

// const prisma = new PrismaClient({ log: ["query", "info", "warn", "error"] });
// id        Int      @id @default(autoincrement())
// student   Student  @relation(fields: [StudentId], references: [id])
// book      Book     @relation(fields: [bookId], references: [id])
// StudentId Int
// bookId    Int
// createdAt DateTime @default(now())

const create = async (data) => {
  const { studentId, bookId } = data;
  console.log("data", data);
  const newBorrow = await prisma.borrows.create({
    data: {
      student: {
        connect: { id: parseInt(studentId) },
      },
      book: {
        connect: { id: parseInt(bookId) },
      },
    },
  });
  return newBorrow;
};

const get = async () => {
  const borrows = await prisma.borrows.findMany({
    select: {
      id: true,
      createdAt: true,
      student: true,
      book: true,
    },
  });
  return borrows;
};

const remove = async (id) => {
  console.log("id", typeof parseInt(id));
  const borrow = await prisma.borrows.delete({
    where: {
      id: parseInt(id),
    },
  });
  return borrow;
};

module.exports = { create, get, remove };
