import { createContext, useReducer } from 'react';
import { ContextType, CreateFormType, Props } from 'interfaces/createForm.d';
import { defaultField } from 'constants/createForm';
import reducer from './reducers/createForm';

const initialValue: CreateFormType = {
  formData: [defaultField],
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const CreateFormContext = createContext<ContextType>(null!);

const CreateFormProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  const value: ContextType = { state, dispatch };
  return <CreateFormContext.Provider value={value}>{children}</CreateFormContext.Provider>;
};

export default CreateFormProvider;
