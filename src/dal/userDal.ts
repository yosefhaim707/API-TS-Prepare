import { User } from "../models/user";

let users: User[] = [];

export const getUsers = (): User[] => users;

export const getUsersByBody = (user: User): string => {
    const selected: User | undefined = users.find(user => id == user.id);
    if (!selected) {
        throw new Error('User not found!!');
    }
    else {
        return selected;
    }
}

export const addUser = (user: User): string => {

}