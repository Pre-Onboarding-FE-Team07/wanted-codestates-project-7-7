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
import { useState, useContext, useMemo } from 'react';
import { FormListContext } from 'context/FormListContext';
import { useParams } from 'react-router-dom';

function WriteFormPage() {
  const [form] = Form.useForm();
  const userListDispatch = useUserListDispatch();
  const [address, setAddress] = useState('');
  const [url, setUrl] = useState('');
  const { formListState } = useContext(FormListContext);
  const { id } = useParams();
  const matchData = useMemo(
    () => formListState.formList.filter((item) => item.id === id)[0].fieldList,
    [formListState.formList, id]
  );

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

  const componentType = () =>
    matchData?.map((item) => {
      console.log('item', item);
      switch (item.type) {
        case 'text':
          return <Name item={item} />;
        case 'phone':
          return <Phone item={item} />;
        case 'address':
          return <PostCode setAddress={setAddress} item={item} />;
        case 'select':
          return <SelectBox item={item} />;
        case 'file':
          return <File setUrl={setUrl} item={item} />;
        case 'agreement':
          return <Agreement item={item} />;
        default:
          return null;
      }
    });

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
          {componentType()}
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
