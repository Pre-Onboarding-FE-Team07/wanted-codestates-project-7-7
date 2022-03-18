import styled from 'styled-components';

interface InputProps {
  placeholder: string;
}
function Input({ placeholder }: InputProps) {
  return <InputWrap placeholder={placeholder}></InputWrap>;
}

export default Input;

const InputWrap = styled.input`
  border: 0;
  border-bottom: 1px solid lightgray;
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  ::placeholder {
    font-size: 0.9em;
  }
`;
