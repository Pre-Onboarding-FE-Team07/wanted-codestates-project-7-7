import { createContext, useReducer, useMemo } from 'react';
import { FormListContextType, FormListStateType } from 'interfaces/formList.d';
import reducer from './reducers/formList';

const initialState: FormListStateType = {
  formList: [],
};

export const FormListContext = createContext<FormListContextType>({
  formListState: initialState,
  formListDispatch: () => null,
});

interface Props {
  children: React.ReactNode;
}

const FormListProvider = ({ children }: Props) => {
  const [formListState, formListDispatch] = useReducer(reducer, initialState);
  const value: FormListContextType = useMemo(
    () => Object({ formListState, formListDispatch }),
    [formListState]
  );
  return <FormListContext.Provider value={value}>{children}</FormListContext.Provider>;
};

export default FormListProvider;
