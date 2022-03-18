import { Form, Upload } from 'antd';
import { FiPlus } from 'react-icons/fi';
import styled from 'styled-components';
import { UploadChangeParam } from 'antd/lib/upload';
import { UploadFile } from 'antd/lib/upload/interface';
import { useState } from 'react';

function File() {
  const { Dragger } = Upload;
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
  };
  const [img, setImg] = useState({
    imageUrl: '',
    loading: false,
  });
  const handleChange = (info: UploadChangeParam<UploadFile<unknown>>) => {
    if (info.file.status === 'uploading') {
      setImg({
        imageUrl: '',
        loading: true,
      });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (imageUrl: string) =>
        setImg({
          imageUrl,
          loading: false,
        })
      );
    }
  };
  function getBase64(img: Blob, callback: (...args: any[]) => void) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  return (
    <Form.Item name="input_1" label="첨부파일">
      <Dragger
        style={{ borderRadius: '1rem', padding: '2rem 1rem' }}
        {...props}
        onChange={(info: UploadChangeParam<UploadFile<unknown>>) => handleChange(info)}
      >
        {img.imageUrl ? (
          <ImgScreen src={img.imageUrl} alt="avatar" />
        ) : (
          <>
            <Ptag>
              <FiPlus />
            </Ptag>
            <Ptag>눌러서 파일을 등록</Ptag>
          </>
        )}
      </Dragger>
    </Form.Item>
  );
}

export default File;

const ImgScreen = styled.img`
  height: 104px;
`;
const Ptag = styled.p`
  margin-top: 8;
`;
