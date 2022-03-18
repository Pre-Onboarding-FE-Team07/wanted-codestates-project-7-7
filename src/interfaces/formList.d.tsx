import { ReactNode, Dispatch } from 'react';
import { FormDataStateType } from './createForm.d';

export interface Props {
  children: ReactNode;
}

export interface FormListActionType {
  type: string;
  formData: FormDataStateType;
}
export type FormListType = FormDataStateType[];

export interface FormListStateType {
  formList: FormListType;
}

export interface FormListContextType {
  formListState: FormListStateType;
  formListDispatch: Dispatch<FormListActionType>;
}
