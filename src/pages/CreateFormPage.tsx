import { useContext } from 'react';
import styled from 'styled-components';
import FieldList from '../components/Field/FieldList';
import CreateFormProvider from 'context/CreateFormContext';
import CreateFormButtonWrap from 'components/CreateFormButtonWrap';

function CreateFormPage() {
  return (
    <CreateFormProvider>
      <Wrap>
        <FormSection>
          <Label>제목</Label>
          <InputTitle></InputTitle>
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

const sampleFormData = [
  {
    id: 'name',
    type: 'text',
    required: true,
    label: '이름',
    placeholder: '주민등록상 이름 입력',
  },
  {
    id: 'phone',
    type: 'phone',
    required: true,
    label: '휴대폰 번호',
  },
  {
    id: 'address',
    type: 'address',
    required: true,
    label: '배송지',
  },
  {
    id: 'input_0',
    type: 'select',
    label: '옵션1',
    options: ['S', 'L', 'XL', 'XXL'],
    required: true,
  },
  {
    id: 'input_1',
    type: 'file',
    label: '첨부파일',
    required: false,
    description: '<p>첨부파일은 위와 같이 입력할 수 있습니다.</p>',
  },
];

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
