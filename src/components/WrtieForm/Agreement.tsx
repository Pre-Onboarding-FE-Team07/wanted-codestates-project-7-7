import { Form, Radio } from 'antd';
import { componentType } from 'interfaces/writeForm';

function Agreement({ item }: componentType) {
  const { label } = item;
  return (
    <Form.Item
      name="agreement"
      valuePropName="checked"
      rules={[
        {
          validator: (_, value) =>
            value ? Promise.resolve() : Promise.reject(new Error(`${label} 동의해주세요!`)),
        },
      ]}
    >
      <Radio>{label}</Radio>
    </Form.Item>
  );
}

export default Agreement;
