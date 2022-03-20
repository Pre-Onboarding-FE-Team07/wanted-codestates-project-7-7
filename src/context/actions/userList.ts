import { userId, userType } from 'interfaces/user';

export type UserListAction = { type: 'CREATE'; id: userId; userData: userType };
