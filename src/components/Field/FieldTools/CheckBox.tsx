import styled from 'styled-components';

function Checkbox() {
  return (
    <CheckboxWrap>
      <input type="checkbox" checked />
      <span>필수</span>
    </CheckboxWrap>
  );
}

export default Checkbox;

const CheckboxWrap = styled.button`
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  span {
    font-size: 1.2rem;
    margin-left: 2px;
  }
`;
