import { useContext } from 'react';
import styled from 'styled-components';
import Field from './Field';
import { FieldType } from 'interfaces/createForm.d';
import { CreateFormContext } from 'context/CreateFormContext';

function FieldList() {
  const { state } = useContext(CreateFormContext);

  return (
    <FieldListWrap>
      {state?.formData.map((field: FieldType) => (
        <Field key={field.id} data={field}></Field>
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
