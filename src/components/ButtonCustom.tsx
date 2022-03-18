import { Button, ButtonProps } from 'antd';
import styled from 'styled-components';

function ButtonCustom({ style, children, ...rest }: ButtonProps) {
  return (
    <Btn style={style} {...rest}>
      {children}
    </Btn>
  );
}

export default ButtonCustom;

const Btn = styled(Button)`
  border-radius: 5rem;
  width: 10rem;
  height: 3.5rem;
  margin: 0.5rem;
`;
