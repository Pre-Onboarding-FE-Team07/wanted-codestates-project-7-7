import { userDataRead } from 'constants/user';
import { userProps } from 'interfaces/user';
import { createContext, Dispatch, useContext, useReducer } from 'react';

const UserDataContext = createContext<userProps | undefined>(undefined);

export type UserDataState = userProps;
export type UserDataAction = {
  type: 'SET_USER_DATA';
  data: object;
};
type UserDataDispatch = Dispatch<UserDataAction>;
const UserDataDispatchContext = createContext<UserDataDispatch | undefined>(undefined);

export default function userDataReducer(
  state: UserDataState,
  action: UserDataAction
): UserDataState {
  switch (action.type) {
    case 'SET_USER_DATA':
      return state;
    default:
      throw new Error('Unhandled action');
  }
}

export const UserDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, dispatch] = useReducer(userDataReducer, userDataRead);

  return (
    <UserDataDispatchContext.Provider value={dispatch}>
      <UserDataContext.Provider value={userData}>{children}</UserDataContext.Provider>
    </UserDataDispatchContext.Provider>
  );
};

export const useUserDataState = () => {
  const state = useContext(UserDataContext);
  if (!state) throw new Error('useUserDataState not found');
  return state;
};

export function useUserDataDispatch() {
  const dispatch = useContext(UserDataDispatchContext);
  if (!dispatch) throw new Error('useUserDataDispatch not found');
  return dispatch;
}
