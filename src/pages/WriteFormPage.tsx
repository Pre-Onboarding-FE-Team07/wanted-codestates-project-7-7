import styled from 'styled-components';
import 'antd/dist/antd.min.css';
import { Form } from 'antd';
import Btn from '../components/ButtonCustom';
import { userType } from '../interfaces/user';
import { UserDataProvider } from 'context/UserDataContext';
import { useUserListDispatch } from 'context/UserListContext';
import { useState, useContext, useMemo, useCallback } from 'react';
import { FormListContext } from 'context/FormListContext';
import { useNavigate, useParams } from 'react-router-dom';
import WriteFormWrap from 'components/WriteFormWrap';

function WriteFormPage() {
  const [form] = Form.useForm();
  const userListDispatch = useUserListDispatch();
  const [address, setAddress] = useState('');
  const [url, setUrl] = useState('');
  // const [disabled, setDisabled] = useState(true);
  const { formListState } = useContext(FormListContext);
  const { id } = useParams();
  const matchData = useMemo(
    () => formListState.formList.filter((item) => item.id === id)[0].fieldList,
    [formListState.formList, id]
  );
  const navigate = useNavigate();

  const onFinish = (values: userType) => {
    userListDispatch({
      type: 'CREATE',
      id: id,
      userData: {
        name: values.name,
        phone: values.phone,
        address: address,
        select: values.select,
        url: url,
        agreement: values.agreement,
      },
    });
    navigate(`/userData/${id}`);
  };

  const handleChangeAddress = useCallback(
    (value: string) => {
      setAddress(value);
    },
    [setAddress]
  );

  const handleChangeUrl = useCallback(
    (value: string) => {
      setUrl(value);
    },
    [setUrl]
  );

  return (
    <UserDataProvider>
      <Write>
        <Form
          form={form}
          onFinish={onFinish}
          // onValuesChange={(allFields) => {
          //   const name = allFields.name;
          //   name.length === 0 ? setDisabled(true) : setDisabled(false);
          // }}
          layout="vertical"
          autoComplete="off"
        >
          <WriteFormWrap
            matchData={matchData}
            setAddress={handleChangeAddress}
            setUrl={handleChangeUrl}
          />
          <ButtonArea>
            <Form.Item shouldUpdate>
              {() => (
                <Btn type="primary" htmlType="submit">
                  제출하기
                </Btn>
              )}
            </Form.Item>
            <Btn onClick={() => navigate(`/`)}>취소하기</Btn>
          </ButtonArea>
        </Form>
      </Write>
    </UserDataProvider>
  );
}

export default WriteFormPage;

const Write = styled.div`
  margin: 2rem;
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
`;
