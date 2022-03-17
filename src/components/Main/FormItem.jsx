import styled from 'styled-components';
import { BiFileBlank } from 'react-icons/bi';
import DropdownList from 'components/Main/DropdownList';

function Field() {
  return (
    <FormListWrap>
      <BiFileBlank />
      <FormTitle></FormTitle>
      <DropDownWrap>
        <DropdownList />
      </DropDownWrap>
    </FormListWrap>
  );
}

export default Field;

const FormListWrap = styled.section`
  width: 100%;
  height: 110px;
  border: 1px solid #333;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: 15px;
`;

const DropDownWrap = styled.div`
  /* display: flex; */
  position: relative;
  /* position: absolute; */
  /* top: 16px;
  right: 10px; */
`;

const FormTitle = styled.div``;
