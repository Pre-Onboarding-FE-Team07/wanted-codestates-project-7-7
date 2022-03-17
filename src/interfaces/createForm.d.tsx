import { ReactNode, Dispatch } from 'react';

export interface FormType {
  name: string;
  defaultLabel: string;
  type: string;
  placeholder?: string;
}

export interface FieldType {
  id: string;
  type: string;
  label: string;
  required: boolean;
  placeholder?: string;
  options?: Array<string>;
  description?: string;
  contents?: string;
}

export interface Props {
  children: ReactNode;
}

export interface CreateFormType {
  formData: FieldType[];
}

export interface ContextType {
  state: CreateFormType;
  dispatch: Dispatch<{ type: string; value?: unknown }>;
}
