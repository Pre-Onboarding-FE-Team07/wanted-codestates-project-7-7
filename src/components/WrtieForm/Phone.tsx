import styled from 'styled-components';
import { Input, Form } from 'antd';
import 'antd/dist/antd.min.css';
import { useState, useCallback } from 'react';
import { componentType } from 'interfaces/writeForm';

export default function Phone({ item }: componentType) {
  const [number, setNumber] = useState<string>('');
  const { label, placeholder, required } = item;

  const onPhoneNumber = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.value.length === 13) {
        setNumber(e.target.value);
      } else if (e.target.value.length === 3 || e.target.value.length === 8) {
        e.target.value = e.target.value.concat('-');
      } else if (e.target.value.length > 13) {
        e.target.value = number;
      }
    },
    [number]
  );

  return (
    <Form.Item
      name="phone"
      label={label}
      rules={[
        {
          required: required,
          message: `${label} 입력해주세요!`,
        },
        {
          pattern: /^(\d{3})-(\d{4})-(\d{4})$/,
          message: '올바른 휴대전화 번호를 입력해주세요!',
        },
      ]}
    >
      <InputPhone onInput={onPhoneNumber} value={number} placeholder={placeholder} />
    </Form.Item>
  );
}

const InputPhone = styled(Input)`
  background: ${(props) => props.theme.color.lightGray};
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.color.lightGray};
  padding: 1.2rem;
`;
