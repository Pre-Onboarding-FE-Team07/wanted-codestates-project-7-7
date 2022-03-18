import { memo } from 'react';
import styled from 'styled-components';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FormType } from 'interfaces/createForm.d';

interface Options {
  options: readonly FormType[];
  onChange: (target: FormType) => void;
}

function SelectType({ options, onChange }: Options) {
  const handleChangeOption = (e: { target: HTMLSelectElement }) =>
    onChange(options[Number(e.target.value)]);
  return (
    <SelectWrap>
      <Select onChange={handleChangeOption}>
        {options.map(({ name }, index) => (
          <option key={name} value={index}>
            {name}
          </option>
        ))}
      </Select>
      <Arrow />
    </SelectWrap>
  );
}

export default memo(SelectType);
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
  padding: 0.4rem 1rem;
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
