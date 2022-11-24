const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({ errorFormat: "minimal" });

const create = async (data) => {
  const { name } = data;
  console.log("tipe", name);
  const newType = await prisma.type.create({
    data: {
      name: name.toLowerCase(),
    },
  });
  return newType;
};
const get = async () => {
  const type = await prisma.type.findMany({
    include: {
      books: {
        select: {
          id: true,
          title: true,
          description: true,
          author: true,
        },
      },
    },
  });
  return type;
};

module.exports = { create, get };
