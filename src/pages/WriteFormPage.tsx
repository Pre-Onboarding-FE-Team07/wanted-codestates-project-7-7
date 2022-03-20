import styled from 'styled-components';
import 'antd/dist/antd.min.css';
import { Form } from 'antd';
import Btn from '../components/ButtonCustom';
import { userType } from '../interfaces/user';
import { useUserListDispatch } from 'context/UserListContext';
import { useState, useContext, useMemo, useCallback } from 'react';
import { FormListContext } from 'context/FormListContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import WriteFormWrap from 'components/WriteFormWrap';

function WriteFormPage() {
  const [form] = Form.useForm();
  const userListDispatch = useUserListDispatch();
  const [address, setAddress] = useState('');
  const [url, setUrl] = useState('');
  const [disabled, setDisabled] = useState(false);
  const { formListState } = useContext(FormListContext);
  const { id } = useParams();
  const matchData = useMemo(
    () => formListState.formList.filter((item) => item.id === id)[0].fieldList,
    [formListState.formList, id]
  );
  const navigate = useNavigate();
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.

  useEffect(() => {
    forceUpdate({});
  }, []);

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

  const onValuesChange = (value: object) => setDisabled(Object.values(value).length > 0);

  return (
    <Write>
      <Form
        form={form}
        onFinish={onFinish}
        onValuesChange={onValuesChange}
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
              <Btn
                type="primary"
                htmlType="submit"
                disabled={
                  !disabled || !!form.getFieldsError().filter(({ errors }) => errors.length).length
                }
              >
                제출하기
              </Btn>
            )}
          </Form.Item>
          <Btn onClick={() => navigate(`/`)}>취소하기</Btn>
        </ButtonArea>
      </Form>
    </Write>
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
