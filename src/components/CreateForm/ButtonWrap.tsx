import { useContext, useState, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { FormDataContext } from 'context/FormDataContext';
import { FormListContext } from 'context/FormListContext';
import { addField } from 'context/actions/formData';
import { addForm } from 'context/actions/formList';
import Modal from './Modal';
import { FieldListType, FieldType } from 'interfaces/createForm.d';
import Toast from 'utils/toast';
import { useNavigate } from 'react-router-dom';
import WriteFormWrap from 'components/WriteFormWrap';
import { Form } from 'antd';

const checkEmptyMustInput = (fieldList: FieldListType) => {
  return fieldList.some((field: FieldType) => {
    return field.label === '' || (field.options ? field.options.length === 0 : false);
  });
};
function CreateFormButtonWrap() {
  const navigate = useNavigate();
  const { formListDispatch } = useContext(FormListContext);
  const { state, dispatch } = useContext(FormDataContext);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleAddClick = () => dispatch(addField());
  const handleSaveClick = () => {
    if (state.fieldList.length === 0) {
      Toast('warning', '적어도 하나 이상의 필드를 추가해주세요.');
      return;
    }
    if (state.title === '') {
      Toast('warning', '제목을 작성해주세요.');
      return;
    }
    if (checkEmptyMustInput(state.fieldList)) {
      Toast('warning', '작성하지 않은 항목이 있습니다.');
      return;
    }
    formListDispatch(addForm(state));
    Toast('ok', '저장되었습니다.');
    navigate('/');
  };
  const toggleModal = useCallback(
    () => setIsModalOpen((isModalOpen) => !isModalOpen),
    [setIsModalOpen]
  );
  return (
    <>
      <AddButton onClick={handleAddClick}>필드 추가하기</AddButton>
      <BottomButtonArea>
        <Button onClick={toggleModal}>폼열기</Button>
        <Button onClick={handleSaveClick} color="blue">
          저장하기
        </Button>
      </BottomButtonArea>
      {isModalOpen && (
        <Modal title="폼 미리보기" toggleModal={toggleModal}>
          <Form layout="vertical" autoComplete="off" style={formStyle}>
            <WriteFormWrap matchData={state.fieldList} />
          </Form>
        </Modal>
      )}
    </>
  );
}

export default CreateFormButtonWrap;

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

const formStyle = {
  padding: '1rem',
};
