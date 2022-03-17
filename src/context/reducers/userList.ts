import { UserListAction } from '../actions/userList';
import { UserListState } from '../UserListContext';

export default function userListReducer(
  state: UserListState,
  action: UserListAction
): UserListState {
  switch (action.type) {
    case 'CREATE':
      const nextId = Math.max(0, ...state.map((user) => user.id)) + 1;
      return state.concat({
        id: nextId,
        name: action.data.name,
        phone: action.data.phone,
        address: action.data.address,
        input_0: action.data.input_0,
        input_1: action.data.input_1,
        argeement_0: action.data.argeement_0,
      });
    default:
      throw new Error('Unhandled action');
  }
}
