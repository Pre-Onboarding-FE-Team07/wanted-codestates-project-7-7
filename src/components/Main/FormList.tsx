import FormItem from 'antd/lib/form/FormItem';
import styled from 'styled-components';

const forms = [
  {
    id: 1,
    text: 'Context Api 배우기',
    done: true,
  },
  {
    id: 2,
    text: 'TypeScript 배우기',
    done: true,
  },
];

function FormList() {
  return (
    <FormItemContainer>
      {forms.map((form) => (
        <FormItem key={form.id}></FormItem>
      ))}
    </FormItemContainer>
  );
}

export default FormList;

const FormItemContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
`;
