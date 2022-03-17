import FormItem from 'antd/lib/form/FormItem';
import styled from 'styled-components';

interface FormListProps {
  forms: FormDataProps[];
}

interface FormDataProps {
  id: number;
}

function FormList({ forms }: FormListProps) {
  return (
    <FormItemContainer>
      {forms.map((formData: FormDataProps) => (
        <FormItem key={formData.id}></FormItem>
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
