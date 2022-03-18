import { UserListState } from 'interfaces/user';
import { UserListAction } from '../actions/userList';

export default function userListReducer(
  state: UserListState,
  action: UserListAction
): UserListState {
  switch (action.type) {
    case 'CREATE':
      const { name, phone, address, select, url, agreement } = action.data;
      return state.concat({ name, phone, address, select, url, agreement });
    default:
      throw new Error('Unhandled action');
  }
}
