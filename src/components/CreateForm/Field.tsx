import { FieldType } from 'interfaces/createForm.d';
import { memo, useState, useRef } from 'react';
import styled from 'styled-components';
import FieldTools from './FieldTools';
import TextEditor from './TextEditor';
import ReactQuill from 'react-quill';

function Field({ data }: { data: FieldType }) {
  const quillRef = useRef<ReactQuill>(null);
  const [htmlContent, setHtmlContent] = useState<string>('');
  return (
    <FieldWrap>
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
  overflow: visible unset;
`;
