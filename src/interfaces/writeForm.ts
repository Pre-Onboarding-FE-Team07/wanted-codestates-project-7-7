import { FieldType } from './createForm.d';

export interface componentType {
  item: FieldType;
}

export interface FileType {
  setUrl: (value: string) => void;
  item: FieldType;
}

export interface PostCodeType {
  setAddress: (value: string) => void;
  item: FieldType;
}
