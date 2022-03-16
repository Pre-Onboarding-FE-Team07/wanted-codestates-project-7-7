import styled, { css } from 'styled-components';
import FieldList from '../components/Field/FieldList';

function CreateFormPage() {
  const list = [{ id: 1 }, { id: 2 }];
  return (
    <Wrap>
      <FormSection>
        <Label>제목</Label>
        <InputTitle></InputTitle>
      </FormSection>
      <FormSection>
        <Label>필드목록</Label>
        <FieldList list={list} />
      </FormSection>
      <AddButton>필드 추가하기</AddButton>
      <BottomButtonArea>
        <Button>폼열기</Button>
        <Button color="blue">저장하기</Button>
      </BottomButtonArea>
    </Wrap>
  );
}

export default CreateFormPage;

const Wrap = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const FormSection = styled.section`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: 0.6rem;
  font-size: 1.4rem;
  &::after {
    content: '*';
    margin-left: 4px;
    color: red;
  }
`;

const InputTitle = styled.input`
  width: 100%;
  display: block;
  border: 1px solid #eeeeee;
  border-radius: 1rem;
  padding: 1rem;
  font-size: 1em;
`;

const ButtonStyle = styled.button`
  padding: 1rem;
  border-radius: 6px;
  font-weight: 500;
  font-size: 1.2rem;
`;

const AddButton = styled(ButtonStyle)`
  width: 100%;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.blue};
  margin-top: 1rem;
`;

const BottomButtonArea = styled.div`
  padding: 1rem;
  float: right;
`;

const Button = styled(ButtonStyle)`
  margin-left: 6px;
  ${({ color, theme }) =>
    css`
      ${color === 'blue' ? theme.button.blue : theme.button.lightgray};
    `};
`;
