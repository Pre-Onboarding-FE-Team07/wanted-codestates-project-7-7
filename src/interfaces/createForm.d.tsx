import { ReactNode, Dispatch } from 'react';

export interface FormType {
  name: string;
  defaultLabel: string;
  type: string;
  placeholder?: string;
}

export interface OptionType {
  id: string;
  name: string;
}

export interface FieldType {
  id: string;
  type: string;
  label: string;
  required: boolean;
  placeholder?: string;
  options?: Array<OptionType>;
  description?: string;
  contents?: string;
}

export type FormDataType = FieldType[];

export interface Props {
  children: ReactNode;
}

export interface CreateFormActionType {
  type: string;
  newFields?: FormDataType;
  field?: FieldType;
  fieldId?: string;
  title?: string;
}

export interface CreateFormStateType {
  formData: FormDataType;
  loading: boolean;
  title: string;
}

export interface CreateFormContextType {
  state: CreateFormStateType;
  dispatch: Dispatch<CreateFormActionType>;
}

export interface FieldStateType {
  field: FieldType;
  loading: boolean;
}

export interface FieldActionType {
  type: string;
  field?: FieldType;
  data?: object;
}

export interface FieldContextType {
  fieldState: FieldStateType;
  fieldDispatch: Dispatch<FieldActionType>;
}
