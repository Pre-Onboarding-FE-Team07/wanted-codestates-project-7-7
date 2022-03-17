import { Input, InputProps } from 'antd';
import styled from 'styled-components';

function InputCustom({ style, children, ...rest }: InputProps) {
  return (
    <Inp style={style} {...rest}>
      {children}
    </Inp>
  );
}

export default InputCustom;

const Inp = styled(Input)`
  background: ${(props) => props.theme.color.lightGray};
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.color.lightGray};
  padding: 1.2rem;
  cursor: pointer;
`;
