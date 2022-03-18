import styled from 'styled-components';
import { Input, Form } from 'antd';
import 'antd/dist/antd.min.css';

function Name() {
  return (
    <Form.Item
      name="name"
      label="이름"
      rules={[
        {
          required: true,
          message: '이름을 입력해주세요!',
        },
        {
          pattern: /^[가-힣]{2,4}$/,
          message: '2~4자의 한글이름을 입력해주세요!',
        },
      ]}
    >
      <InputName placeholder="주민등록상 이름 입력" />
    </Form.Item>
  );
}

export default Name;

const InputName = styled(Input)`
  background: ${(props) => props.theme.color.lightGray};
  border-radius: 1rem;
  border: 0;
  padding: 1.2rem;
`;
