import { FieldStateType, FieldType, FieldActionType } from 'interfaces/createForm.d';
import { UPDATE_FIELD_DATA } from '../actions/types';

const reducer = (fieldState: FieldStateType, action: FieldActionType): FieldStateType => {
  switch (action.type) {
    case UPDATE_FIELD_DATA:
      const prevField: FieldType = fieldState.field;
      return {
        ...fieldState,
        field: { ...prevField, ...action.data },
      };
    default:
      return fieldState;
  }
};
export default reducer;
