import 'antd/dist/antd.css';
import { Form, Pagination, Radio } from 'antd';
import styled from 'styled-components';
import { useUserListState } from 'context/UserListContext';
import InputCustom from 'components/InputCustom';
import { useState } from 'react';

function UserDataPage() {
  const user = useUserListState();
  const defaultPage = {
    min: 0,
    max: 1,
  };
  const [current, setCurrent] = useState(defaultPage);
  const onChangePage = (page: number) => {
    window.scrollTo(0, 0);
    setCurrent({
      min: page - 1,
      max: page,
    });
  };
  return (
    <Form layout="vertical">
      {user &&
        user.slice(current.min, current.max).map((item, idx) => (
          <User key={idx}>
            <Form.Item label="이름">
              <InputCustom value={item.name} readOnly={true} />
            </Form.Item>
            <Form.Item label="휴대폰 번호">
              <InputCustom value={item.phone} readOnly={true} />
            </Form.Item>
            <Form.Item label="배송지">
              <InputCustom value={item.address} readOnly={true} />
            </Form.Item>
            <Form.Item label="옵션1">
              <InputCustom value={item.input_0} readOnly={true} />
            </Form.Item>
            <Form.Item label="첨부파일">
              <ImgBox>
                <ImgScreen src={item.input_1} alt="avatar" />
              </ImgBox>
            </Form.Item>
            <Form.Item valuePropName="checked">
              <ImgBox>
                <Radio checked={item.argeement_0}>개인정보 수집 약관 동의(필수)</Radio>
              </ImgBox>
            </Form.Item>
          </User>
        ))}
      <Pagination
        simple
        defaultCurrent={1}
        total={user.length * 10}
        onChange={(page) => onChangePage(page)}
        style={{ textAlign: 'right', padding: '2rem' }}
      />
    </Form>
  );
}

export default UserDataPage;

const User = styled.div`
  margin: 2rem;
`;

const ImgScreen = styled.img`
  width: 100%;
`;

const ImgBox = styled.div`
  background: ${(props) => props.theme.color.lightGray};
  border-radius: 1rem;
  border: 0;
  padding: 1.2rem;
`;
