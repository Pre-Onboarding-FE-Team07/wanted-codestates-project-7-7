import { userListRead } from 'constants/user';
import { UserListState } from 'interfaces/user';
import React, { createContext, Dispatch, useReducer, useContext } from 'react';
import { UserListAction } from './actions/userList';
import userListReducer from './reducers/userList';

const UserListContext = createContext<UserListState | undefined>(undefined);

type UserListDispatch = Dispatch<UserListAction>;
const UserListDispatchContext = createContext<UserListDispatch | undefined>(undefined);

export const UserListProvider = ({ children }: { children: React.ReactNode }) => {
  const [userList, dispatch] = useReducer(userListReducer, userListRead);
  console.log('userList', userList);
  return (
    <UserListDispatchContext.Provider value={dispatch}>
      <UserListContext.Provider value={userList}>{children}</UserListContext.Provider>
    </UserListDispatchContext.Provider>
  );
};

export const useUserListState = () => {
  const state = useContext(UserListContext);
  if (!state) throw new Error('useUserListState not found');
  return state;
};

export function useUserListDispatch() {
  const dispatch = useContext(UserListDispatchContext);
  if (!dispatch) throw new Error('UserListProvider not found');
  return dispatch;
}
