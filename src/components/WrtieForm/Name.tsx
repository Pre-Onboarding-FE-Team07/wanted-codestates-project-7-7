import styled from 'styled-components';
import { Input, Form } from 'antd';
import 'antd/dist/antd.min.css';
import { componentType } from 'interfaces/writeForm';

function Name({ item }: componentType) {
  const { label, placeholder, required } = item;

  return (
    <Form.Item
      name="name"
      label={label}
      rules={[
        {
          required: required,
          message: `${label} 입력해주세요!`,
        },
      ]}
    >
      <InputName placeholder={placeholder} />
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
