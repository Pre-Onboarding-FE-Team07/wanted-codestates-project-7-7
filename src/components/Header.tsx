import styled from 'styled-components';

interface HeaderProps {
  title?: string;
}

function Header({ title = 'datable' }: HeaderProps) {
  return <HeaderWrap>{title}</HeaderWrap>;
}

export default Header;

const HeaderWrap = styled.header`
  width: 100%;
  height: ${({ theme }) => theme.size.headerHeight};
  color: ${({ theme }) => theme.color.fontTitleColor};
  font-weight: bold;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 2rem;
`;
