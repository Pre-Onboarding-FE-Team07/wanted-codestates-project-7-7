import { FieldType, CreateFormType } from 'interfaces/createForm.d';
import { defaultField } from 'constants/createForm';
import { SET_FIELDS, ADD_FIELD, UPDATE_FIELD, DELETE_FIELD } from '../actions/types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const reducer = (state: CreateFormType, action: any) => {
  switch (action.type) {
    case SET_FIELDS:
      return {
        ...state,
        formData: action.newFields,
      };
    case ADD_FIELD:
      const { formData } = state;
      let lastId = 0;
      if (formData.length) {
        const lastField = formData[formData.length - 1];
        lastId = Number(lastField.id.split('_')[1]);
      }
      const newField = { ...defaultField, id: `field_${lastId + 1}` };
      return {
        ...state,
        formData: [...state.formData, newField],
      };
    case UPDATE_FIELD:
      return {
        ...state,
        formData: state.formData.map((field: FieldType) =>
          field.id === action.field.id ? { ...field, ...action.field } : field
        ),
      };
    case DELETE_FIELD:
      return {
        ...state,
        formData: state.formData.filter((field: FieldType) => field.id !== action.fieldId),
      };
    default:
      return state;
  }
};
export default reducer;
