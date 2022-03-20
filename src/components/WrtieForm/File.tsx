import { Form, Progress } from 'antd';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';
import { FileType } from 'interfaces/writeForm';

function File({ setUrl, item }: FileType) {
  const { label, required } = item;
  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState('');
  const [percent, setPercent] = useState(0);

  // 파일 정보 저장
  const saveFileImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInterval(() => {
      setPercent((prev) => prev + 1);
    }, 10);
    setTimeout(function () {
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0];
      setFileImage(URL.createObjectURL(file as File));
      e.target.value = '';
    }, 2000);
  };

  //   // 파일 삭제
  //   const deleteFileImage = () => {
  //     URL.revokeObjectURL(fileImage);
  //     setFileImage('');
  //   };

  useEffect(() => {
    setUrl(fileImage);
  }, [fileImage, setUrl]);

  return (
    <Form.Item
      name="file"
      label={label}
      valuePropName="fileList"
      rules={[
        {
          required: required,
          message: `${label} 넣어주세요!`,
        },
      ]}
    >
      <ImgArea>
        <ImgLabel htmlFor="profile-image-input">
          {fileImage.length !== 0 ? (
            <PreviewImg alt="img" src={fileImage} />
          ) : percent === 0 ? (
            <FileSelectArea>
              <Ptag>
                <FiPlus />
              </Ptag>
              <Ptag>눌러서 파일을 등록</Ptag>
            </FileSelectArea>
          ) : (
            <FileSelectArea>
              <Progress percent={percent} />
            </FileSelectArea>
          )}
        </ImgLabel>
        <InputFile type="file" accept="image/*" id="profile-image-input" onChange={saveFileImage} />
      </ImgArea>
    </Form.Item>
  );
}

export default File;

const ImgArea = styled.div`
  width: 100%;
  height: 30vh;
  background-color: ${(props) => props.theme.color.lightGray};
  text-align: center;
  border-radius: 1em;
`;

const ImgLabel = styled.label``;

const PreviewImg = styled.img`
  max-width: 100%;
  height: 30vh;
`;

const InputFile = styled.input`
  visibility: hidden;
`;

const FileSelectArea = styled.div`
  text-align: center;
  width: 100%;
  padding: calc(20vh / 2) 3em 0;
`;

const Ptag = styled.p`
  margin-top: 8;
  width: 100%;
`;
