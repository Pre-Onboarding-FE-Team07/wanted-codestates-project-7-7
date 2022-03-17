import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Form } from 'antd';
import Phone from '../components/WrtieForm/Phone';
import PostCode from '../components/WrtieForm/PostCode';
import File from '../components/WrtieForm/File';
import Btn from '../components/ButtonCustom';
import Agreement from '../components/WrtieForm/Agreement';
import { userProps } from '../interfaces/user';
import SelectBox from '../components/WrtieForm/SelectBox';
import Name from '../components/WrtieForm/Name';
import { useUserListDispatch } from 'context/UserListContext';

function WriteFormPage() {
  const [form] = Form.useForm();
  const dispatch = useUserListDispatch();

  const onFinish = (values: userProps) => {
    values.address = '주소';
    console.log('Success:', values);
    dispatch({
      type: 'CREATE',
      data: values,
    });
  };

  return (
    <Write>
      <Form form={form} onFinish={onFinish} layout="vertical" autoComplete="off">
        <Name />
        <Phone />
        <PostCode />
        <SelectBox />
        <File />
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
