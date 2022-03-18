import styled from 'styled-components';
import { Input, SelectType, OptionList, CheckBox } from './index';
import { CgArrowsV, CgClose } from 'react-icons/cg';
function FieldTools() {
  const type = 'dropdown';
  const placeholder = '플레이스홀더 예) 11시 30분';
  const options = [
    {
      id: 1,
      name: 'S',
    },
    {
      id: 2,
      name: 'XL',
    },
  ];
  return (
    <>
      <FieldToolsWrap>
        <SelectType />
        <Input placeholder="라벨 입력" />
        <CheckBox />
        <DragHandle />
        <DeleteButton />
      </FieldToolsWrap>
      {type === String('input') && <Input placeholder={placeholder} />}
      {type === String('dropdown') && <OptionList options={options} />}
    </>
  );
}

export default FieldTools;

const FieldToolsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  min-height: ${({ theme }) => theme.size.toolHeight};
  > * {
    border-bottom: 1px solid lightgray;
  }
  > svg {
    padding: 0.8rem;
    width: ${({ theme }) => theme.size.toolHeight};
    height: ${({ theme }) => theme.size.toolHeight};
  }
`;

const DragHandle = styled(CgArrowsV)`
  cursor: move;
`;

const DeleteButton = styled(CgClose)`
  background-color: #fe5047;
  color: white;
  cursor: pointer;
`;
