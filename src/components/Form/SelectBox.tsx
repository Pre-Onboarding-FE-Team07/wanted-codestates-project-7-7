import { Select, Form } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';

function SelectBox() {
  const { Option } = Select;
  return (
    <Form.Item
      name="input_0"
      label="옵션1"
      hasFeedback
      rules={[
        {
          required: true,
          message: '옵션을 선택해주세요!',
        },
      ]}
    >
      <SelectItem>
        <Option value="china">China</Option>
        <Option value="usa">U.S.A</Option>
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
    padding: 0.8rem 1rem !important;
    height: 4rem !important;
  }
`;
