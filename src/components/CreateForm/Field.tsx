import { useContext } from 'react';
import { FieldType, FieldListType } from 'interfaces/createForm.d';
import { memo, useRef, DragEvent, MutableRefObject } from 'react';
import styled from 'styled-components';
import FieldDatas from './FieldDatas';
import FieldProvider from 'context/FieldContext';
import { FormDataContext } from 'context/FormDataContext';

interface FiledProps {
  data: FieldType;
  startItem: MutableRefObject<number | null>;
  overItem: MutableRefObject<number | null>;
  index: number;
  onDragEnd: (fieldList: FieldListType) => void;
}
function Field({ data, startItem, overItem, index, onDragEnd }: FiledProps) {
  const { state } = useContext(FormDataContext);
  const dragRef = useRef<HTMLTableSectionElement>(null);
  const prevX = useRef<number | null>(null);
  const handleDragStart = (e: DragEvent<HTMLElement>) => {
    const dragX = e.pageX;
    prevX.current = dragX;
    startItem.current = index;
    if (dragRef.current) dragRef.current.classList.add('drag');
  };
  const handleDragEnter = () => (overItem.current = index);
  const handleDragOver = (e: DragEvent<HTMLElement>) => e.preventDefault();
  const handleDragEnd = () => {
    onDragEnd(state.fieldList);
  };
  return (
    <FieldProvider field={data}>
      <FieldWrap
        ref={dragRef}
        draggable
        onDragStart={handleDragStart}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragEnd={handleDragEnd}
      >
        <FieldDatas />
      </FieldWrap>
    </FieldProvider>
  );
}
export default memo(Field);

const FieldWrap = styled.section`
  width: 100%;
  border: 1px solid lightgray;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  font-size: 1.4rem;
  > * {
    font-size: 1.4rem !important;
  }
  transition: box-shadow 0.4s;
  &.drag {
    box-shadow: 0 0 2px 6px #3d87d124;
  }
`;
