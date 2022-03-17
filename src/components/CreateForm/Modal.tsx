import { memo, ReactElement } from 'react';
import styled from 'styled-components';
import { GrPrevious } from 'react-icons/gr';

interface ModalProps {
  title: string;
  children: ReactElement;
  toggleModal: () => void;
}

function Modal({ title, children, toggleModal }: ModalProps) {
  return (
    <ModalWrap>
      <Header>
        <CloseButton onClick={toggleModal} />
        {title}
      </Header>
      {children}
    </ModalWrap>
  );
}

export default memo(Modal);

const ModalWrap = styled.section`
  width: 100%;
  max-width: 500px;
  height: 100%;
  position: fixed;
  top: 0;
  left: calc((100vw - 500px) / 2);
  z-index: 101;
  background-color: white;
  ${({ theme }) => theme.createForm`
    left: 0;
  `}
`;

const Header = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.size.headerHeight};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 2rem;
`;

const CloseButton = styled(GrPrevious)`
  width: ${({ theme }) => theme.size.headerHeight};
  height: ${({ theme }) => theme.size.headerHeight};
  padding: 1.2rem;
  position: absolute;
  left: 0;
`;
