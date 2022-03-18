import { useState, useCallback, useContext, useMemo } from 'react';
import styled from 'styled-components';
import { SelectType, OptionList, CheckBox } from './FieldTools/index';
import { CgArrowsV, CgClose } from 'react-icons/cg';
import { formTypes, formTextTypes } from 'constants/createForm';
import { FormType } from 'interfaces/createForm.d';
import { FieldContext } from 'context/FieldContext';
import { FormDataContext } from 'context/FormDataContext';
import { updateFieldData } from 'context/actions/field';
import { deleteField } from 'context/actions/formData';

function FieldTools() {
  const { dispatch } = useContext(FormDataContext);
  const { fieldState, fieldDispatch } = useContext(FieldContext);
  const field = useMemo(() => fieldState.field, [fieldState.field]);
  const [formType, setFormType] = useState<FormType>(formTypes[0]);
  const handleInput = useCallback(
    (e: { target: HTMLInputElement }) => {
      const { name, value } = e.target;
      fieldDispatch(updateFieldData({ [name]: value }));
    },
    [fieldDispatch]
  );
  const handleChangeType = useCallback(
    (target: FormType) => {
      setFormType(target);
      fieldDispatch(updateFieldData({ type: target.type, placeholder: '' }));
    },
    [setFormType, fieldDispatch]
  );

  const handleDeleteClick = () => dispatch(deleteField(field.id));
  const handleToggleRequired = (required: boolean) => fieldDispatch(updateFieldData({ required }));
  return (
    <>
      <FieldToolsWrap>
        <SelectType options={formTypes} onChange={handleChangeType} />
        <Input name="label" onChange={handleInput} placeholder="라벨 입력" />
        <CheckBox onChange={handleToggleRequired} />
        <DragHandle className="handle" />
        <DeleteButton onClick={handleDeleteClick} />
      </FieldToolsWrap>
      {formTextTypes.includes(formType?.type) && (
        <Input name="placeholder" onChange={handleInput} placeholder={formType?.placeholder} />
      )}
      {formType?.name === String('드롭다운') && <OptionList />}
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

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid lightgray;
  padding: 0.4rem 1rem;
  display: flex;
  justify-content: center;
  flex: 1;
  width: 100%;
  ::placeholder {
    font-size: 0.9em;
  }
`;
export { Input };
