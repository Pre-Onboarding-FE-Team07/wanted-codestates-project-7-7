import { FieldType, CreateFormStateType, CreateFormActionType } from 'interfaces/createForm.d';
import { defaultField } from 'constants/createForm';
import { SET_FIELDS, ADD_FIELD, UPDATE_FIELD, DELETE_FIELD, UPDATE_TITLE } from '../actions/types';

const reducer = (state: CreateFormStateType, action: CreateFormActionType): CreateFormStateType => {
  switch (action.type) {
    case SET_FIELDS:
      return {
        ...state,
        formData: action.newFields || [],
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
          field.id === action.field?.id ? { ...field, ...action.field } : field
        ),
      };
    case DELETE_FIELD:
      return {
        ...state,
        formData: state.formData.filter((field: FieldType) => field.id !== action.fieldId),
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
