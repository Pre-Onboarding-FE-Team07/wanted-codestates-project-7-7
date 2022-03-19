import { FieldType } from './createForm.d';

export interface componentType {
  item: FieldType;
}

export interface FileType {
  setUrl: React.Dispatch<React.SetStateAction<string>>;
  item: FieldType;
}

export interface PostCodeType {
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  item: FieldType;
}
