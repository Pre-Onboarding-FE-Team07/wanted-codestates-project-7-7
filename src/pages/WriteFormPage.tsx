import styled from 'styled-components';
import 'antd/dist/antd.min.css';
import { Form } from 'antd';
import Phone from '../components/WrtieForm/Phone';
import PostCode from '../components/WrtieForm/PostCode';
import File from '../components/WrtieForm/File';
import Btn from '../components/ButtonCustom';
import Agreement from '../components/WrtieForm/Agreement';
import { userProps } from '../interfaces/user';
import SelectBox from '../components/WrtieForm/SelectBox';
import Name from '../components/WrtieForm/Name';
import { UserDataProvider } from 'context/UserDataContext';
import { useUserListDispatch } from 'context/UserListContext';
import { useState } from 'react';

function WriteFormPage() {
  const [form] = Form.useForm();
  const userListDispatch = useUserListDispatch();
  const [address, setAddress] = useState('');
  const [url, setUrl] = useState('');
  const onFinish = (values: userProps) => {
    userListDispatch({
      type: 'CREATE',
      data: {
        name: values.name,
        phone: values.phone,
        address: address,
        select: values.select,
        url: url,
        agreement: values.agreement,
      },
    });
  };

  return (
    <UserDataProvider>
      <Write>
        <Form
          form={form}
          onFinish={onFinish}
          // onValuesChange={(allFields) => {
          //   userDataSave(allFields);
          //   // dispatchUserData({
          //   //   type: 'SET_USER_DATA',
          //   //   data: {
          //   //     name: name,
          //   //     phone: phone,
          //   //     select: select,
          //   //     agreement: agreement,
          //   //   },
          //   // });
          // }}
          layout="vertical"
          autoComplete="off"
        >
          <Name />
          <Phone />
          <PostCode setAddress={setAddress} />
          <SelectBox />
          <File setUrl={setUrl} />
          <Agreement />
          <ButtonArea>
            <Form.Item shouldUpdate>
              {() => (
                <Btn type="primary" htmlType="submit">
                  제출하기
                </Btn>
              )}
            </Form.Item>
            <Btn>취소하기</Btn>
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
