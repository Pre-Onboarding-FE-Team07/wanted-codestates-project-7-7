import { userType } from 'interfaces/user';
import { createContext, Dispatch, useContext, useReducer } from 'react';

const UserDataContext = createContext<userType>({
  name: '',
  phone: '',
  address: '',
  agreement: false,
});

export type UserDataState = userType;
export type UserDataAction = {
  type: 'SET_USER_DATA';
  data: object;
};
type UserDataDispatch = Dispatch<UserDataAction>;
const UserDataDispatchContext = createContext<UserDataDispatch>(() => null);

export default function userDataReducer(
  state: UserDataState,
  action: UserDataAction
): UserDataState {
  switch (action.type) {
    case 'SET_USER_DATA':
      return { ...state, ...action.data };
    default:
      throw new Error('Unhandled action');
  }
}

export const UserDataProvider = ({ children }: { children: React.ReactNode }) => {
  const [userData, dispatch] = useReducer(userDataReducer, {
    name: '',
    phone: '',
    address: '',
    agreement: false,
  });

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
