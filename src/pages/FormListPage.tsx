import styled from 'styled-components';
import { Pagination } from 'antd';
import AddButton from 'components/Main/AddButton';
import { RiFileListLine, RiFile2Line } from 'react-icons/ri';
import { Empty } from 'antd';
import { FormListContext } from 'context/FormListContext';
import { FormDataStateType } from 'interfaces/createForm.d';
import { useContext, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function FormListPage() {
  const navigate = useNavigate();
  const { formListState } = useContext(FormListContext);
  const formList = useMemo(() => formListState.formList, [formListState]);

  return (
    <Container>
      <Wrapper>
        <Label>최신목록</Label>
        <Link to="/create">
          <AddButton />
        </Link>
      </Wrapper>
      <FormCard>
        {formList?.map((form: FormDataStateType) => (
          <FormItem key={form.id}>
            <p>{form.title}</p>
            <IconWrap>
              <span onClick={() => navigate(`/userData/${form.id}`)}>
                <RiFileListLine />
              </span>
              <span onClick={() => navigate(`/write/${form.id}`)}>
                <RiFile2Line />
              </span>
            </IconWrap>
          </FormItem>
        ))}
        {formList.length <= 0 ? <Empty>+ 버튼을 눌러 폼을 작성해주세요</Empty> : null}
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

  p {
    font-size: 1.5rem;
    padding: 8px;
  }
`;

const FormItem = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  cursor: pointer;
  margin: 1rem 0;
  padding: 1rem;
  background: #eeeeee;
  font-size: 1.6rem;

  p {
    width: 100%;
    margin: 0;
    padding: 1rem;
  }
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-size: 1.8rem;

  span:nth-child(2) {
    margin-left: 0.5rem;
  }
`;

const PageContainer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;

export default FormListPage;
