import styled from 'styled-components';
import { Input, Form, Modal } from 'antd';
import 'antd/dist/antd.min.css';
import { useState } from 'react';
import DaumPostcode, { Address } from 'react-daum-postcode';
import { FiChevronLeft } from 'react-icons/fi';
import Btn from '../ButtonCustom';
interface PostCodeProps {
  setAddress: React.Dispatch<React.SetStateAction<string>>;
}

function PostCode({ setAddress }: PostCodeProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isAddress, setIsAddress] = useState('');
  const [isDetail, setIsDetail] = useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleComplete = (data: Address) => setIsAddress(data.address);
  const onAddress = () => {
    setIsAddress(isAddress);
    setAddress(isAddress.concat(' ').concat(isDetail));
    setIsModalVisible(false);
  };

  const isOrNotAddress = () => {
    if (isAddress.length === 0) {
      return Promise.reject(new Error('주소를 입력해주세요!'));
    } else {
      return Promise.resolve();
    }
  };

  return (
    <div>
      <Form.Item
        name="address"
        label="배송지"
        rules={[
          {
            required: true,
            validator: isOrNotAddress,
          },
        ]}
      >
        <InputAddress onClick={showModal} value={isAddress + ' ' + isDetail} />
      </Form.Item>
      <Modal
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
      </Modal>
    </div>
  );
}

export default PostCode;

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
