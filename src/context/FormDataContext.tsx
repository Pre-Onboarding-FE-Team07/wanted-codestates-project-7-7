import { createContext, useReducer, useMemo } from 'react';
import { FormDataStateType, Props, FormDataContextType } from 'interfaces/createForm.d';
import { defaultField } from 'constants/createForm';
import reducer from './reducers/formData';

const initialState: FormDataStateType = {
  id: '',
  title: '',
  fieldList: [defaultField],
};

export const FormDataContext = createContext<FormDataContextType>({
  state: initialState,
  dispatch: () => null,
});

const FormDataProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value: FormDataContextType = useMemo(() => Object({ state, dispatch }), [state]);
  return <FormDataContext.Provider value={value}>{children}</FormDataContext.Provider>;
};

export default FormDataProvider;
