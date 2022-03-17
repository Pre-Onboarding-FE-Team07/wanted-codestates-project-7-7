import { Button, ButtonProps } from 'antd';
import styled from 'styled-components';

function Btn({ style, children, ...rest }: ButtonProps) {
  return (
    <ButtonCustom style={style} {...rest}>
      {children}
    </ButtonCustom>
  );
}

export default Btn;

const ButtonCustom = styled(Button)`
  border-radius: 5rem;
  width: 10rem;
  height: 3.5rem;
  margin: 0.5rem;
`;
