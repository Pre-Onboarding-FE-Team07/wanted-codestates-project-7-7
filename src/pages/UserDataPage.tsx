import 'antd/dist/antd.min.css';
import { Form, Pagination } from 'antd';
import Name from 'components/Form/Name';
import Phone from 'components/Form/Phone';
import PostCode from 'components/Form/PostCode';
import SelectBox from 'components/Form/SelectBox';
import styled from 'styled-components';
import Image from 'components/Form/Image';
import Agreement from 'components/Form/Agreement';

function UserDataPage() {
  return (
    <User>
      <Form layout="vertical">
        <Name />
        <Phone />
        <PostCode />
        <SelectBox />
        <Image />
        <Agreement />
        <Pagination style={{ textAlign: 'center' }} />
      </Form>
    </User>
  );
}

export default UserDataPage;

const User = styled.div`
  margin: 2rem;
`;
