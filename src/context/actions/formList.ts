import { ADD_FORM } from './types';
import { FormDataStateType } from 'interfaces/createForm.d';

export const addForm = (formData: FormDataStateType) => ({
  type: ADD_FORM,
  formData,
});
