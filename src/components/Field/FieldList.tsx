import styled from 'styled-components';
import Field from './Field';

interface FieldListProps {
  list: FieldProps[];
}

interface FieldProps {
  id: number;
}

function FieldList({ list }: FieldListProps) {
  return (
    <FieldListWrap>
      {list.map((field: FieldProps) => (
        <Field key={field.id}></Field>
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
