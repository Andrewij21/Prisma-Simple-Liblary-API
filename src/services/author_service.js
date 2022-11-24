const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({ errorFormat: "minimal" });

const create = async (data) => {
  const { name } = data;

  const newAuthor = await prisma.author.create({
    data: {
      name: name.toLowerCase(),
    },
  });
  console.log("author", newAuthor);
  return newAuthor;
};

const get = async () => {
  const author = await prisma.author.findMany({
    include: {
      book: {
        select: {
          id: true,
          title: true,
          description: true,
          author: true,
          type: true,
        },
      },
    },
  });
  return author;
};

const remove = async (id) => {
  console.log("id", typeof parseInt(id));
  const author = await prisma.author.delete({
    where: {
      id: parseInt(id),
    },
  });
  return author;
};

module.exports = { create, get, remove };
