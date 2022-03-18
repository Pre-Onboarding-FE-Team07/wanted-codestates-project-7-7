import { useContext, useRef, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import Field from './Field';
import { FieldType } from 'interfaces/createForm.d';
import { FormDataContext } from 'context/FormDataContext';
import { setFields } from 'context/actions/formData';

function FieldList() {
  const { state, dispatch } = useContext(FormDataContext);
  const fieldList = useMemo(() => state.fieldList, [state.fieldList]);
  const startItem = useRef<number | null>(null);
  const overItem = useRef<number | null>(null);

  const handleDragEnd = useCallback(
    (fieldList) => {
      const startIndex = startItem.current;
      const endIndex = overItem.current;
      if (startIndex !== endIndex && startIndex !== null && endIndex !== null) {
        const list = [...fieldList];
        const target = list[startIndex];
        list.splice(startIndex, 1);
        list.splice(endIndex, 0, target);
        startItem.current = null;
        overItem.current = null;
        dispatch(setFields(list));
      }
      setTimeout(() => {
        document.querySelector('.drag')?.classList.remove('drag');
      }, 400);
    },
    [dispatch]
  );
  return (
    <FieldListWrap>
      {fieldList.map((field: FieldType, index: number) => (
        <Field
          key={field.id}
          data={field}
          startItem={startItem}
          overItem={overItem}
          onDragEnd={handleDragEnd}
          index={index}
        ></Field>
      ))}
    </FieldListWrap>
  );
}

export default FieldList;

const FieldListWrap = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
`;
