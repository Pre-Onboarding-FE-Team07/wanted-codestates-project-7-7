import { createContext, useReducer, useMemo } from 'react';
import { CreateFormStateType, Props, CreateFormContextType } from 'interfaces/createForm.d';
import { defaultField } from 'constants/createForm';
import reducer from './reducers/createForm';

const initialState: CreateFormStateType = {
  formData: [defaultField],
  loading: false,
  title: '',
};

export const CreateFormContext = createContext<CreateFormContextType>({
  state: initialState,
  dispatch: () => null,
});

const CreateFormProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value: CreateFormContextType = useMemo(() => Object({ state, dispatch }), [state]);
  return <CreateFormContext.Provider value={value}>{children}</CreateFormContext.Provider>;
};

export default CreateFormProvider;
