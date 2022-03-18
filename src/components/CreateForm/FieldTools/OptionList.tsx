import { useState } from 'react';
import styled from 'styled-components';
import Option from './Option';
import { Input } from '../FieldTools';
import { useEffect, useContext } from 'react';
import { FieldContext } from 'context/FieldContext';
import { updateFieldData } from 'context/actions/field';
import { OptionType } from 'interfaces/createForm.d';

type Options = Array<OptionType>;

let count = 0;
const isDuplicate = (arr: Options, keyword: string) =>
  arr.some(({ name }: OptionType) => name === keyword);

function OptionList() {
  const [options, setOptions] = useState<Options>([]);
  const [input, setInput] = useState('');
  const { fieldDispatch } = useContext(FieldContext);

  useEffect(() => {
    fieldDispatch(updateFieldData({ options: options.map((key) => key.name) }));
  }, [options, fieldDispatch]);

  const handleChange = (e: { target: HTMLInputElement }) => setInput(e.target.value);
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Comma') {
      const name = input.replace(',', '');
      if (!isDuplicate(options, name)) {
        const option = {
          id: String(count + 1),
          name,
        };
        count++;
        setOptions([...options, option]);
      }
      setInput('');
    }
  };

  const handleClick = (id: string) => {
    setOptions((options: Options) => options.filter((option: OptionType) => option.id !== id));
  };

  return (
    <OptionListWrap>
      <OptionsWrap>
        {options?.map((option: OptionType) => (
          <Option onClick={handleClick} key={option.id} {...option} />
        ))}
        <Input
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          placeholder="옵션 (각 아이템은 콤마(,)로 구분합니다.)"
          value={input}
        />
      </OptionsWrap>
    </OptionListWrap>
  );
}

export default OptionList;

const OptionListWrap = styled.div`
  width: 100%;
  min-height: 40px;
  border-bottom: 1px solid lightgray;
  display: flex;
  justify-content: center;
`;

const OptionsWrap = styled.div`
  width: 100%;
  display: flex;
  font-size: 1.2rem;
  flex-flow: row wrap;
  padding: 0.4rem 0;
  gap: 4px 0px;
  button {
    margin-left: 4px;
    &:last-of-type {
      margin-right: 4px;
    }
  }
  input {
    min-width: 100px;
    border-bottom: 0 !important;
  }
`;
