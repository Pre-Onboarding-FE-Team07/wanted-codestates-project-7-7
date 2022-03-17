import styled from 'styled-components';
import { Form } from 'antd';

function Image() {
  // 추후 경로 수정
  const IMG_URL = 'https://blog.kakaocdn.net/dn/ej7HHN/btqEpJAha97/cSWVSFX8PrV03o15PZ8Bd1/img.jpg';
  return (
    <Form.Item name="input_1" label="첨부파일">
      <ImgBox>
        <ImgScreen src={IMG_URL} alt="avatar" />
      </ImgBox>
    </Form.Item>
  );
}

export default Image;

const ImgScreen = styled.img`
  width: 100%;
  height: 200px;
`;

const ImgBox = styled.div`
  background: ${(props) => props.theme.color.lightGray};
  border-radius: 1rem;
  border: 0;
  padding: 1.2rem;
  height: 200px;
`;
