import { useState, useCallback, useContext } from 'react';
import styled from 'styled-components';
import { Input, SelectType, OptionList, CheckBox } from './FieldTools/index';
import { CgArrowsV, CgClose } from 'react-icons/cg';
import { formTypes, formTextTypes } from 'constants/createForm';
import { FormType, FieldType } from 'interfaces/createForm.d';
import { CreateFormContext } from 'context/CreateFormContext';
import { deleteField, updateField } from 'context/actions/createForm';

const options = [
  {
    id: 1,
    name: 'S',
  },
  {
    id: 2,
    name: 'XL',
  },
];
function FieldTools({ data }: { data: FieldType }) {
  const { dispatch } = useContext(CreateFormContext);
  const [formType, setFormType] = useState<FormType>(formTypes[0]);
  const handleChange = useCallback((target: FormType) => setFormType(target), []);
  const handleDeleteClick = () => dispatch(deleteField(data.id));
  const handleToggleRequired = (required: boolean) => dispatch(updateField({ ...data, required }));
  return (
    <>
      <FieldToolsWrap>
        <SelectType options={formTypes} onChange={handleChange} />
        <Input placeholder="라벨 입력" />
        <CheckBox onChange={handleToggleRequired} />
        <DragHandle />
        <DeleteButton onClick={handleDeleteClick} />
      </FieldToolsWrap>
      {formTextTypes.includes(formType?.type) && <Input placeholder={formType?.placeholder} />}
      {formType?.name === String('드롭다운') && <OptionList options={options} />}
    </>
  );
}

export default FieldTools;

const FieldToolsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  min-height: ${({ theme }) => theme.size.toolHeight};
  > * {
    border-bottom: 1px solid lightgray;
  }
  > svg {
    padding: 0.8rem;
    width: ${({ theme }) => theme.size.toolHeight};
    height: ${({ theme }) => theme.size.toolHeight};
  }
`;

const DragHandle = styled(CgArrowsV)`
  cursor: move;
`;

const DeleteButton = styled(CgClose)`
  background-color: #fe5047;
  color: white;
  cursor: pointer;
`;
