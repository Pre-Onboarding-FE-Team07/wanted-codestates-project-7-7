import styled from 'styled-components';
import { HiPlus } from 'react-icons/hi';

function AddButton() {
  return (
    <CreateButton>
      <HiPlus />
    </CreateButton>
  );
}

export default AddButton;

const CreateButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 5px;
  font-size: 2rem;
  background-color: #fe5047;
  color: white;
  margin: 1px;
`;
