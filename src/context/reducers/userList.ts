import { UserListState } from 'interfaces/user';
import { UserListAction } from '../actions/userList';

export default function userListReducer(
  state: UserListState,
  action: UserListAction
): UserListState {
  switch (action.type) {
    case 'CREATE':
      const { name, phone, address, input_0, input_1, argeement_0 } = action.data;
      return state.concat({ name, phone, address, input_0, input_1, argeement_0 });
    default:
      throw new Error('Unhandled action');
  }
}
