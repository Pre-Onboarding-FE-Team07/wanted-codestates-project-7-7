import { FieldType } from 'interfaces/createForm.d';
import { memo } from 'react';
import styled from 'styled-components';
import FieldTools from './FieldTools/FieldTools';
import TextEditor from './TextEditor';

function Field({ data }: { data: FieldType }) {
  return (
    <FieldWrap>
      <FieldTools data={data} />
      <TextEditor />
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
  overflow: hidden;
`;
