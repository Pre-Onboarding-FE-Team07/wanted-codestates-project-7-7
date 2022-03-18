import styled from 'styled-components';
import 'antd/dist/antd.min.css';
import { Form } from 'antd';
import Phone from 'components/Form/Phone';
import PostCode from 'components/Form/PostCode';
import File from 'components/Form/File';
import Btn from 'components/Btn';
import Agreement from 'components/Form/Agreement';
import { userProps } from 'interfaces/user.d';
import SelectBox from 'components/Form/SelectBox';
import Name from 'components/Form/Name';

function WriteFormPage() {
  const [form] = Form.useForm();

  const onFinish = (values: userProps) => {
    values.address = '주소';
    console.log('Success:', values);
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
          <Form.Item>
            <Btn type="primary" htmlType="submit">
              제출하기
            </Btn>
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
