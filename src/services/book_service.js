const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({ errorFormat: "minimal" });

const create = async (data) => {
  const { title, description, author, type } = data;

  const newBook = await prisma.book.create({
    data: {
      title: title.toLowerCase(),
      description,
      author: {
        connect: { id: author },
      },
      type: {
        connect: { id: type },
      },
    },
  });
  return newBook;
};

const get = async () => {
  const books = await prisma.book.findMany();
  return books;
};

module.exports = { create, get };
