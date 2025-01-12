import { profile } from "console";
import prisma from "../prisma";


interface User {
  username: string,
  email: string
}


export const registerUser = async (data: User): Promise<void> => {
  const createdUser = prisma.user.create({
    data,
    include: {
      profile: true
    }
  });
}

export const loginUser = async (data: User): Promise<User> => {
  const user = prisma.user.findUnique({
    where: {
      username: data.username,
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
