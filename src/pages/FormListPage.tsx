import styled from 'styled-components';
import { Pagination } from 'antd';
import AddButton from 'components/Main/AddButton';
import DropdownList from 'components/Main/DropdownList';
import { FormListContext } from 'context/FormListContext';
import { FormDataStateType } from 'interfaces/createForm.d';
import { useContext, useMemo } from 'react';

function FormListPage() {
  const { formListState } = useContext(FormListContext);
  const formList = useMemo(() => formListState.formList, [formListState]);
  return (
    <Container>
      <Wrapper>
        <Label>최신목록</Label>
        <AddButton />
      </Wrapper>
      <FormCard>
        {formList?.map((form: FormDataStateType) => (
          <li key={form.id}>{form.title}</li>
        ))}
        <DropDownWrap>
          <DropdownList />
        </DropDownWrap>
      </FormCard>
      <PageContainer>
        <Pagination defaultCurrent={1} total={50} />
      </PageContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

const Wrapper = styled.section`
  width: 100%;
  padding: 10px 8px;
  background: #ffffff;
  flex: 1;
  margin-bottom: 1rem;
  /* border: 1px solid lightgray; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.label`
  font-size: 1.5rem;
  font-weight: 600;
`;

const FormCard = styled.ul`
  width: 100%;
  height: 100%;
  height: 5rem;
  border: 1px solid black;
  list-style: none;
  margin: 1rem 0;
  position: relative;
`;

const DropDownWrap = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 10px;
`;

const PageContainer = styled.footer`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 381px;
  left: 0px;
`;

export default FormListPage;
