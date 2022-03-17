import { FieldType } from 'interfaces/createForm.d';
import { memo, useState, useRef, DragEvent, MutableRefObject } from 'react';
import styled from 'styled-components';
import FieldTools from './FieldTools';
import TextEditor from './TextEditor';
import ReactQuill from 'react-quill';

interface FiledProps {
  data: FieldType;
  startItem: MutableRefObject<number | null>;
  overItem: MutableRefObject<number | null>;
  index: number;
  handleDragEnd: () => void;
}
function Field({ data, startItem, overItem, index, handleDragEnd }: FiledProps) {
  const quillRef = useRef<ReactQuill>(null);
  const dragRef = useRef<HTMLTableSectionElement>(null);
  const prevX = useRef<number | null>(null);
  const [htmlContent, setHtmlContent] = useState<string>('');
  const handleDragStart = (e: DragEvent<HTMLElement>) => {
    const dragX = e.pageX;
    prevX.current = dragX;
    startItem.current = index;
    if (dragRef.current) dragRef.current.classList.add('drag');
  };
  const handleDragEnter = () => (overItem.current = index);
  const handleDragOver = (e: DragEvent<HTMLElement>) => e.preventDefault();
  return (
    <FieldWrap
      ref={dragRef}
      draggable
      onDragStart={handleDragStart}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <FieldTools data={data} />
      <TextEditor quillRef={quillRef} htmlContent={htmlContent} setHtmlContent={setHtmlContent} />
    </FieldWrap>
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
