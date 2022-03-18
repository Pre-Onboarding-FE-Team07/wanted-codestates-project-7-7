import { FormListStateType, FormListActionType } from 'interfaces/formList.d';
import { ADD_FORM } from '../actions/types';

const reducer = (state: FormListStateType, action: FormListActionType): FormListStateType => {
  switch (action.type) {
    case ADD_FORM:
      const { formList } = state;
      let lastId = 0;
      if (formList.length) {
        const lastFORM = formList[formList.length - 1];
        lastId = Number(lastFORM.id.split('_')[1]);
      }
      action.formData.id = 'form_' + (lastId + 1);
      return {
        formList: [...formList, action.formData],
      };
    default:
      return state;
  }
};
export default reducer;
