import prisma from "../prisma";
import { Prisma, User, UserProfile } from "@prisma/client";


export const registerUser = async (data: Prisma.UserCreateInput): Promise<void> => {
  const createdUser = prisma.user.create({
    data,
    include: {
      profile: true
    }
  });
}

export const loginUser = async (data: Prisma.UserCreateInput): Promise<User | null> => {
  const user = prisma.user.findUnique({
    where: {
      name: data.name,
      email: data.email
    }
  });
  return user;
}

export const getUserProfile = async (id: number) => {
  const userWithProfile = await prisma.user.findUnique({
    where: { id },
    include: { profile: true },
  });
  return userWithProfile;
}
