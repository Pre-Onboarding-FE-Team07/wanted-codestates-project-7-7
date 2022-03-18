import { useContext } from 'react';
import styled from 'styled-components';
import FieldList from 'components/CreateForm/FieldList';
import CreateFormProvider, { FormDataContext } from 'context/FormDataContext';
import CreateFormButtonWrap from 'components/CreateForm/ButtonWrap';
import { updateTitle } from 'context/actions/formData';

function CreateFormPage() {
  return (
    <CreateFormProvider>
      <Wrap>
        <FormSection>
          <Label>제목</Label>
          <Title />
        </FormSection>
        <FormSection>
          <Label>필드목록</Label>
          <FieldList />
        </FormSection>
        <CreateFormButtonWrap />
      </Wrap>
    </CreateFormProvider>
  );
}

function Title() {
  const { dispatch } = useContext(FormDataContext);
  const handleChangeInput = (e: { target: HTMLInputElement }) =>
    dispatch(updateTitle(e.target.value));
  return <InputTitle onChange={handleChangeInput}></InputTitle>;
}

export default CreateFormPage;

const Wrap = styled.div`
  width: 100%;
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
