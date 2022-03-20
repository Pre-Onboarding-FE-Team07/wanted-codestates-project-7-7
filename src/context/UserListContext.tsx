import { allUserInitData } from 'constants/user';
import { allUserListType } from 'interfaces/user';
import React, { createContext, Dispatch, useReducer, useContext } from 'react';
import { UserListAction } from './actions/userList';
import userListReducer from './reducers/userList';

const initialState: allUserListType = allUserInitData;

const UserListContext = createContext<allUserListType>(initialState);

type UserListDispatch = Dispatch<UserListAction>;
const UserListDispatchContext = createContext<UserListDispatch | undefined>(undefined);

export const UserListProvider = ({ children }: { children: React.ReactNode }) => {
  const [userList, dispatch] = useReducer(userListReducer, allUserInitData);
  return (
    <UserListDispatchContext.Provider value={dispatch}>
      <UserListContext.Provider value={userList}>{children}</UserListContext.Provider>
    </UserListDispatchContext.Provider>
  );
};

export const useUserListState = () => {
  const state = useContext(UserListContext);
  if (!state) throw new Error('useuserListType not found');
  return state;
};

export function useUserListDispatch() {
  const dispatch = useContext(UserListDispatchContext);
  if (!dispatch) throw new Error('UserListProvider not found');
  return dispatch;
}
