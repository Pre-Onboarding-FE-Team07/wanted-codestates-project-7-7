import 'antd/dist/antd.min.css';
import { Pagination, Radio, Empty } from 'antd';
import styled from 'styled-components';
import { useUserListState } from 'context/UserListContext';
import InputCustom from 'components/InputCustom';
import { useState, useMemo, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FormListContext } from 'context/FormListContext';
import ButtonCustom from 'components/ButtonCustom';

function UserDataPage() {
  const userAllList = useUserListState();
  const { formListState } = useContext(FormListContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const matchUserList = useMemo(
    () => userAllList.filter((item) => item.id === id)[0]?.userList,
    [id, userAllList]
  );
  const matchData = useMemo(
    () => formListState.formList.filter((item) => item.id === id)[0].fieldList,
    [formListState.formList, id]
  );

  const defaultPage = {
    min: 0,
    max: 1,
  };
  const [current, setCurrent] = useState(defaultPage);
  const onChangePage = (page: number) => {
    window.scrollTo(0, 0);
    setCurrent({
      min: page - 1,
      max: page,
    });
  };
  const argLabel = () => {
    return matchData?.map((item, idx) =>
      item.type === 'agreement' ? <p key={idx}>{item.label}</p> : null
    );
  };

  if (matchUserList === undefined)
    return (
      <EmptyForm>
        <Empty>
          폼을 작성한 사용자가 없습니다. <br />
          <br />
          <ButtonCustom type="primary" onClick={() => navigate(`/write/${id}`)}>
            작성하러가기
          </ButtonCustom>
        </Empty>
      </EmptyForm>
    );
  return (
    <UserForm>
      {matchUserList?.slice(current.min, current.max).map((item, idx) => (
        <div key={idx}>
          {item.name !== undefined ? (
            <Field>
              {matchData?.map((item) => (item.type === 'text' ? <p>{item.label}</p> : null))}
              <InputCustom value={item.name} readOnly={true} />
            </Field>
          ) : null}
          {item.phone !== undefined ? (
            <Field>
              {matchData?.map((item) => (item.type === 'phone' ? <p>{item.label}</p> : null))}
              <InputCustom value={item.phone} readOnly={true} />
            </Field>
          ) : null}
          {item.address !== '' ? (
            <Field>
              {matchData?.map((item) => (item.type === 'address' ? <p>{item.label}</p> : null))}
              <InputCustom value={item.address} readOnly={true} />
            </Field>
          ) : null}
          {item.select !== undefined ? (
            <Field>
              {matchData?.map((item) => (item.type === 'select' ? <p>{item.label}</p> : null))}
              <InputCustom value={item.select} readOnly={true} />
            </Field>
          ) : null}
          {item.url !== '' ? (
            <Field>
              {matchData?.map((item) => (item.type === 'file' ? <p>{item.label}</p> : null))}
              <ImgBox>
                <ImgScreen src={item.url} alt="avatar" />
              </ImgBox>
            </Field>
          ) : null}
          {item.agreement !== undefined ? (
            <Field>
              {argLabel()}
              <Radio checked={item.agreement}>{argLabel()}</Radio>
            </Field>
          ) : null}
        </div>
      ))}
      <Pagination
        simple
        defaultCurrent={1}
        total={matchUserList.length * 10}
        onChange={(page) => onChangePage(page)}
        style={{ padding: '2rem', position: 'absolute', bottom: 0, right: 0 }}
      />
    </UserForm>
  );
}

export default UserDataPage;

const EmptyForm = styled.div`
  display: grid;
  place-items: center;
  min-height: 70vh;
`;

const UserForm = styled.div`
  margin: 2rem 0;
  position: relative;
  min-height: 90vh;
`;

const Field = styled.div`
  margin: 1rem;
`;

const ImgScreen = styled.img`
  width: 100%;
`;

const ImgBox = styled.div`
  background: ${(props) => props.theme.color.lightGray};
  border-radius: 1rem;
  border: 0;
  padding: 1.2rem;
`;
