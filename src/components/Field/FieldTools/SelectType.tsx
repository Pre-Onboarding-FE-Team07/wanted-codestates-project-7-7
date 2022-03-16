import styled from 'styled-components';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

function SelectType() {
  return (
    <SelectWrap>
      <Select>
        <Option>1</Option>
        <Option>2</Option>
        <Option>3</Option>
      </Select>
      <Arrow />
    </SelectWrap>
  );
}

export default SelectType;
const SelectWrap = styled.div`
  position: relative;
  display: flex;
  min-width: 140px;
  flex: 1;
  border-right: 1px solid lightgray;
  ${({ theme }) => theme.createForm`
    min-width: 100%;
    border-right: 0;
  `}
`;
const Select = styled.select`
  width: 100%;
  height: 100%;
  border: none;
  padding: 0.8rem 1rem;
  appearance: none;
  padding-right: 28px;
  background-color: transparent;
  appearance: none;
  z-index: 3;
`;

const Arrow = styled(MdOutlineKeyboardArrowDown)`
  width: 16px;
  height: 16px;
  margin-left: -28px;
  align-self: center;
`;
const Option = styled.option``;
