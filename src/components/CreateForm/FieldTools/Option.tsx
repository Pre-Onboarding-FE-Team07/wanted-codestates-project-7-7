import styled from 'styled-components';
import { RiCloseLine } from 'react-icons/ri';
import { rgba } from 'polished';

interface OptionProps {
  id: string;
  name: string;
  onClick: (id: string) => void;
}

function Option({ id, name, onClick }: OptionProps) {
  return (
    <OptionWrap onClick={() => onClick(id)}>
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
  height: calc(40px - 0.8rem);
  color: ${({ theme }) => theme.color.blue};
  border-color: ${({ theme }) => theme.color.blue};
  background-color: ${({ theme }) => rgba(theme.color.blue, 0.1)};
  > svg {
    color: #7b8491;
    font-weight: 900;
    font-size: 1.4rem;
  }
`;
