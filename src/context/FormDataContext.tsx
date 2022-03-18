import { createContext, useReducer, useMemo } from 'react';
import { CreateFormStateType, Props, FormDataContextType } from 'interfaces/createForm.d';
import { defaultField } from 'constants/createForm';
import reducer from './reducers/createForm';

const initialState: CreateFormStateType = {
  fieldList: [defaultField],
  title: '',
};

export const FormDataContext = createContext<FormDataContextType>({
  state: initialState,
  dispatch: () => null,
});

const CreateFormProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value: FormDataContextType = useMemo(() => Object({ state, dispatch }), [state]);
  return <FormDataContext.Provider value={value}>{children}</FormDataContext.Provider>;
};

export default CreateFormProvider;
