import styled from 'styled-components';
import Option from './Option';
import Input from './Input';

interface OptionsListProps {
  options: OptionType[];
}
interface OptionType {
  id: number;
  name: string;
}

function OptionList({ options }: OptionsListProps) {
  return (
    <OptionListWrap>
      <OptionsWrap>
        {options.map((option: OptionType) => (
          <Option key={option.id} {...option} />
        ))}
      </OptionsWrap>
      <Input placeholder="옵션 (각 아이템은 콤마(,)로 구분합니다.)" />
    </OptionListWrap>
  );
}

export default OptionList;

const OptionListWrap = styled.div`
  width: 100%;
  height: 40px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: center;
  > * {
    border-bottom: 0 !important;
  }
`;

const OptionsWrap = styled.ul`
  display: flex;
  padding: 0.4rem;
  font-size: 1.2rem;
  gap: 4px;
`;
