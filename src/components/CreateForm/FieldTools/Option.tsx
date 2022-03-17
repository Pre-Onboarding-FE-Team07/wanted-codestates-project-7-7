import styled from 'styled-components';
import { RiCloseLine } from 'react-icons/ri';
import { rgba } from 'polished';

interface OptionType {
  id: number;
  name: string;
}

function Option({ id, name }: OptionType) {
  return (
    <OptionWrap>
      {name}
      <RiCloseLine />
    </OptionWrap>
  );
}

export default Option;

const OptionWrap = styled.button`
  border: 1px solid lightgray;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.2rem 0 0.6rem;
  height: 100%;
  color: ${({ theme }) => theme.color.blue};
  border-color: ${({ theme }) => theme.color.blue};
  background-color: ${({ theme }) => rgba(theme.color.blue, 0.1)};
  > svg {
    color: #7b8491;
    font-weight: 900;
    font-size: 1.4rem;
  }
`;
