import { createContext, useReducer, useMemo } from 'react';
import { FieldContextType, FieldStateType, FieldType } from 'interfaces/createForm.d';
import { defaultField } from 'constants/createForm';
import reducer from './reducers/field';

const initialState: FieldStateType = {
  field: defaultField,
};
export const FieldContext = createContext<FieldContextType>({
  fieldState: initialState,
  fieldDispatch: () => null,
});

interface FieldProps {
  field: FieldType;
  children: React.ReactNode;
}
const FieldProvider = ({ field, children }: FieldProps) => {
  const [fieldState, fieldDispatch] = useReducer(reducer, {
    field,
  });
  const value: FieldContextType = useMemo(
    () => Object({ fieldState, fieldDispatch }),
    [fieldState]
  );
  return <FieldContext.Provider value={value}>{children}</FieldContext.Provider>;
};

export default FieldProvider;
