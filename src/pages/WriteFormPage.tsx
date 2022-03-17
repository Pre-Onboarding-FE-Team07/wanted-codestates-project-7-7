import styled from 'styled-components';
import 'antd/dist/antd.css';
import { Form } from 'antd';
import Phone from '../components/Form/Phone';
import PostCode from '../components/Form/PostCode';
import File from '../components/Form/File';
import Btn from '../components/Btn';
import Agreement from '../components/Form/Agreement';
import { userProps } from '../interfaces/user';
import SelectBox from '../components/Form/SelectBox';
import Name from '../components/Form/Name';
import { useRef, useState, useEffect } from 'react';
function WriteFormPage() {
  const [form] = Form.useForm();
  const formRef = useRef(null);
  const [, forceUpdate] = useState({}); // To disable submit button at the beginning.
  // const addressRef = useRef<HTMLInputElement>(null);
  const onFinish = (values: userProps) => {
    values.address = '주소';
    console.log('Success:', values);
  };

  useEffect(() => {
    forceUpdate({});
  }, [form]);

  // const isChecked = () => {
  //   const isFormKey = ['name', 'phone', 'adress', 'input_0', 'input_1', 'arggment_0'];
  //   isFormKey.forEach((item) => {
  //     return form.getFieldValue(item).length > 0 ? true : false;
  //   });
  // };

  // const isFormKey = ['name', 'phone', 'adress', 'input_0', 'input_1', 'arggment_0'];
  // const isChecked = isFormKey.forEach((item) => {
  //   console.log(form.getFieldValue(item));
  //   return form.getFieldValue(item)?.length > 0 ? true : false;
  // });
  const isChecked = form
    .getFieldsError()
    .filter(({ name }) => form.getFieldValue(name[0])?.length).length;
  console.log(isChecked);

  return (
    <Write>
      <Form form={form} onFinish={onFinish} layout="vertical" autoComplete="off" ref={formRef}>
        <Name />
        <Phone />
        <PostCode />
        <SelectBox />
        <File />
        <Agreement />
        <ButtonArea>
          <Form.Item shouldUpdate>
            {() => (
              <Btn
                type="primary"
                htmlType="submit"
                disabled={
                  !form.isFieldsTouched(true) ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length).length
                }
              >
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
