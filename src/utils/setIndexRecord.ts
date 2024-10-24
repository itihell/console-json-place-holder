import { User } from "../interface/users.interface";

export const setIndexUser = (users: User[]) => {
  return users.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {} as Record<number, User>);
};
