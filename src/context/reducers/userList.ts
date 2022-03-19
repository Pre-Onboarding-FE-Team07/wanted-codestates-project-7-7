import { allUserListType } from 'interfaces/user';
import { UserListAction } from '../actions/userList';

export default function userListReducer(
  state: allUserListType,
  action: UserListAction
): allUserListType {
  switch (action.type) {
    case 'CREATE':
      const selectUser = state.filter((item) => item.id === action.id)[0];
      const selectUserList = selectUser?.userList;
      const selectUserObj = {
        id: action.id,
        userList:
          selectUserList === undefined ? [action.userData] : [...selectUserList, action.userData],
      };
      const unSelectedState = state.filter((item) => item.id !== action.id);

      return [...unSelectedState, selectUserObj];
    default:
      throw new Error('Unhandled action');
  }
}
