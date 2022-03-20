import { Select, Form } from 'antd';
import 'antd/dist/antd.min.css';
import { componentType } from 'interfaces/writeForm';
import styled from 'styled-components';

function SelectBox({ item }: componentType) {
  const { Option } = Select;
  const { label, required, options } = item;
  return (
    <Form.Item
      name="select"
      label={label}
      hasFeedback
      rules={[
        {
          required: required,
          message: `${label} 선택해주세요!`,
        },
      ]}
    >
      <SelectItem>
        {options?.map((item, index) => (
          <Option key={index} value={item}>
            {item}
          </Option>
        ))}
      </SelectItem>
    </Form.Item>
  );
}

export default SelectBox;

const SelectItem = styled(Select)`
  .ant-select-selector {
    background: ${(props) => props.theme.color.lightGray} !important;
    border-radius: 1rem !important;
    border: 0 !important;
    padding: 0.4rem 1rem !important;
    height: 4rem !important;
  }
`;
