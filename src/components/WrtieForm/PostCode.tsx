import styled from 'styled-components';
import { Input, Form, Modal } from 'antd';
import 'antd/dist/antd.min.css';
import { useState } from 'react';
import DaumPostcode, { Address } from 'react-daum-postcode';
import { FiChevronLeft } from 'react-icons/fi';
import Btn from '../ButtonCustom';
import { PostCodeType } from 'interfaces/writeForm';

function PostCode({ setAddress, item }: PostCodeType) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddress, setIsAddress] = useState('');
  const [isDetail, setIsDetail] = useState('');
  const { label, required } = item;
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleComplete = (data: Address) => setIsAddress(data.address);
  const onAddress = () => {
    setAddress(isAddress.concat(' ').concat(isDetail));
    setIsModalVisible(false);
    isOrNotAddress();
  };

  const isOrNotAddress = () => {
    if (required) {
      if (isAddress.length === 0) {
        return Promise.reject(new Error(`${label} 입력해주세요!`));
      } else {
        return Promise.resolve();
      }
    }
    return Promise.resolve();
  };

  return (
    <PostCodeStyle>
      <Form.Item
        name="address"
        label={label}
        rules={[
          {
            validator: isOrNotAddress,
          },
        ]}
      >
        <InputAddress
          onClick={showModal}
          placeholder={isAddress.concat(' ').concat(isDetail)}
          readOnly={true}
        />
      </Form.Item>
      <PopUpAddress
        title={
          isAddress.length > 0 ? (
            <div>
              <FiChevronLeft onClick={() => setIsAddress('')} />
              <span>&nbsp; 배송주소</span>
            </div>
          ) : (
            <p>배송주소</p>
          )
        }
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        {isAddress.length === 0 && <DaumPostcode onComplete={handleComplete} />}
        {isAddress.length > 0 && (
          <>
            <PrintAddress>{isAddress}</PrintAddress>
            <InputAddress
              placeholder="상세주소를 입력해주세요"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsDetail(e.target.value)}
              value={isDetail}
            />
            <Btn type="primary" onClick={onAddress} htmlType="button">
              입력완료
            </Btn>
          </>
        )}
      </PopUpAddress>
    </PostCodeStyle>
  );
}

export default PostCode;

const PostCodeStyle = styled.div`
  position: relative;
`;

const InputAddress = styled(Input)`
  background: ${(props) => props.theme.color.lightGray};
  border-radius: 1rem;
  border: 0;
  padding: 1.2rem;
`;

const PrintAddress = styled.p`
  padding: 1.2rem;
  border-bottom: 1px solid ${(props) => props.theme.color.blue};
`;

const PopUpAddress = styled(Modal)`
  .ant-modal-body {
    padding: 0 !important;
  }
  ${({ theme }) => theme.mobile`
    .ant-modal::after{
      position: absolute;
      max-width: 100% !important;
      margin: 0 !important !important;
      top: 0 !important !important;
      max-width: 100% !important;
      margin: 0 !important;
    }
    .ant-modal-body {
      height: 90vh !important;
    }
    iframe{
      height: 90vh !important;
    }
  `}
`;
