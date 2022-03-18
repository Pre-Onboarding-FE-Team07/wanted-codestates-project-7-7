import { Form, Radio } from 'antd';

function Agreement() {
  return (
    <Form.Item
      name="agreement"
      valuePropName="checked"
      rules={[
        {
          validator: (_, value) =>
            value ? Promise.resolve() : Promise.reject(new Error('약관에 동의해주세요!')),
        },
      ]}
    >
      <Radio>개인정보 수집 약관 동의(필수)</Radio>
    </Form.Item>
  );
}

export default Agreement;
