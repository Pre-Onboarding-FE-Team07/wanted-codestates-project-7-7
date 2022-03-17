import 'antd/dist/antd.css';
import { Form, Pagination } from 'antd';
import Name from 'components/Name';
import Phone from 'components/Phone';
import PostCode from 'components/PostCode';
import SelectBox from 'components/SelectBox';
import styled from 'styled-components';
import Image from 'components/Image';
import Agreement from 'components/Agreement';

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
