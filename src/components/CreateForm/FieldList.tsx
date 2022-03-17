import { useContext, useRef, useMemo } from 'react';
import styled from 'styled-components';
import Field from './Field';
import { FieldType } from 'interfaces/createForm.d';
import { CreateFormContext } from 'context/CreateFormContext';
import { setFields } from 'context/actions/createForm';

function FieldList() {
  const { state, dispatch } = useContext(CreateFormContext);
  const formData = useMemo(() => state?.formData, [state?.formData]);
  const startItem = useRef<number | null>(null);
  const overItem = useRef<number | null>(null);

  const handleDragEnd = () => {
    const startIndex = startItem.current;
    const endIndex = overItem.current;
    if (startIndex !== endIndex && startIndex !== null && endIndex !== null) {
      const list = [...formData];
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
  };
  return (
    <FieldListWrap>
      {formData.map((field: FieldType, index: number) => (
        <Field
          key={field.id}
          data={field}
          startItem={startItem}
          overItem={overItem}
          handleDragEnd={handleDragEnd}
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
