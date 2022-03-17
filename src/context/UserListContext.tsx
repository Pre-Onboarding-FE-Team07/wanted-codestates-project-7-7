import React, { createContext, Dispatch, useReducer, useContext } from 'react';
import { UserListAction } from './actions/userList';
import userListReducer from './reducers/userList';

export type userData = {
  id: number;
  name: string;
  phone: string;
  address: string;
  input_0: string;
  input_1: string;
  argeement_0: boolean;
};

export type UserListState = userData[];

const UserListContext = createContext<UserListState | undefined>(undefined);

type UserListDispatch = Dispatch<UserListAction>;
const UserListDispatchContext = createContext<UserListDispatch | undefined>(undefined);

export const UserListProvider = ({ children }: { children: React.ReactNode }) => {
  const [userList, dispatch] = useReducer(userListReducer, [
    {
      id: 1,
      name: '온보딩',
      phone: '010-1234-5678',
      address: '서울시 강남구',
      input_0: '과자',
      input_1: 'https://cwcontent.asiae.co.kr/asiaresize/215/2020051108220528346_1589152925.jpg',
      argeement_0: true,
    },
  ]);

  return (
    <UserListDispatchContext.Provider value={dispatch}>
      <UserListContext.Provider value={userList}>{children}</UserListContext.Provider>
    </UserListDispatchContext.Provider>
  );
};

export const useUserListState = () => {
  const state = useContext(UserListContext);
  if (!state) throw new Error('UserListProvider not found');
  return state;
};

export function useUserListDispatch() {
  const dispatch = useContext(UserListDispatchContext);
  if (!dispatch) throw new Error('UserListProvider not found');
  return dispatch;
}
