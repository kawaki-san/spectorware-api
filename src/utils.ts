import { my_packages, my_tlds } from "../data/seed";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getPackages = async () => {
  // ... you will write your Prisma Client queries here
  // await prisma.tLDs.createMany({
  //   data: my_tlds,
  // });

  const allPackages = await prisma.packages.findMany();
  return allPackages;
};

export const createPackages = async () => {
  await prisma.packages.createMany({
    data: my_packages,
  });
};

export const createTLDs = async () => {
  await prisma.tLDs.createMany({
    data: my_tlds,
  });
};
