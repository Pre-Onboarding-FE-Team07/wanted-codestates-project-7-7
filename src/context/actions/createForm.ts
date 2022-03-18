import { SET_FIELDS, ADD_FIELD, UPDATE_FIELD, DELETE_FIELD, UPDATE_TITLE } from './types';
import { FieldType } from 'interfaces/createForm.d';

export const setFields = (newFields: FieldType[]) => ({
  type: SET_FIELDS,
  newFields,
});
export const addField = () => ({
  type: ADD_FIELD,
});

export const updateField = (field: FieldType) => ({
  type: UPDATE_FIELD,
  field,
});

export const deleteField = (fieldId: string) => ({
  type: DELETE_FIELD,
  fieldId,
});

export const updateTitle = (title: string) => ({
  type: UPDATE_TITLE,
  title,
});
