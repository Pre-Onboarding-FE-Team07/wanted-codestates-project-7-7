import { userProps } from 'interfaces/user';
import React, { createContext, Dispatch, useReducer, useContext } from 'react';
import { UserListAction } from './actions/userList';
import userListReducer from './reducers/userList';

export type UserListState = userProps[];

const UserListContext = createContext<UserListState | undefined>(undefined);

type UserListDispatch = Dispatch<UserListAction>;
const UserListDispatchContext = createContext<UserListDispatch | undefined>(undefined);

export const UserListProvider = ({ children }: { children: React.ReactNode }) => {
  const [userList, dispatch] = useReducer(userListReducer, [
    {
      name: '온보딩',
      phone: '010-1234-5678',
      address: '서울시 강남구',
      input_0: '프론트엔드',
      input_1: 'https://i.pinimg.com/564x/64/8a/da/648ada9afe5edd10a3f787db11ca4f67.jpg',
      argeement_0: true,
    },
    {
      name: '팀세븐',
      phone: '010-1234-5678',
      address: '서울시 종로구',
      input_0: '쿠키',
      input_1: 'https://i.pinimg.com/564x/a6/09/64/a609647c57faa76636d83cf8e8d2cb59.jpg',
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
