import { FieldType, FormDataStateType, FormDataActionType } from 'interfaces/createForm.d';
import { defaultField } from 'constants/createForm';
import { SET_FIELDS, ADD_FIELD, UPDATE_FIELD, DELETE_FIELD, UPDATE_TITLE } from '../actions/types';

const reducer = (state: FormDataStateType, action: FormDataActionType): FormDataStateType => {
  switch (action.type) {
    case SET_FIELDS:
      return {
        ...state,
        fieldList: action.newFields || [],
      };
    case ADD_FIELD:
      const { fieldList } = state;
      let lastId = 0;
      if (fieldList.length) {
        const lastField = fieldList[fieldList.length - 1];
        lastId = Number(lastField.id.split('_')[1]);
      }
      const newField = { ...defaultField, id: `field_${lastId + 1}` };
      return {
        ...state,
        fieldList: [...state.fieldList, newField],
      };
    case UPDATE_FIELD:
      return {
        ...state,
        fieldList: state.fieldList.map((field: FieldType) =>
          field.id === action.field?.id ? { ...field, ...action.field } : field
        ),
      };
    case DELETE_FIELD:
      return {
        ...state,
        fieldList: state.fieldList.filter((field: FieldType) => field.id !== action.fieldId),
      };
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.title || '',
      };
    default:
      return state;
  }
};
export default reducer;
