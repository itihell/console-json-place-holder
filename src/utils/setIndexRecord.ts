import { User } from "../interface/users.interface";

export const setIndexUser = (users: User[]) => {
  return users.reduce((acc, user) => {
    acc[user.id] = {
        id: user.id,
        name: user.name,
        email: user.email,
    };
    return acc;
  }, {} as Record<number, User>);
};
