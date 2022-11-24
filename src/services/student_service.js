const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient({ errorFormat: "minimal" });

// STATIC OK RESPONDS {status:200,message:"ok"}

const signIn = async (data) => {
  const { email, username, gender, classroom, birthDate } = data;
  // const isBirthDate = birthDate?birthDate:null;
  const newStudent = await prisma.student.create({
    data: {
      email,
      username,
      gender: gender.toUpperCase(),
      classroom,
      birthDate: new Date(birthDate),
    },
    include: {
      borrow: true,
    },
  });
  return newStudent;
};

const get = async () => {
  return await prisma.student.findMany({
    include: {
      borrow: true,
    },
  });
};

const remove = async (id) => {
  return await prisma.student.delete({
    where: {
      id: id,
    },
  });
};
module.exports = { signIn, get, remove };
