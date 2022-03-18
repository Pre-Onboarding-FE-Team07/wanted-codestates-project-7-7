import { UPDATE_FIELD_DATA } from './types';

export const updateFieldData = (data: object) => ({
  type: UPDATE_FIELD_DATA,
  data,
});
