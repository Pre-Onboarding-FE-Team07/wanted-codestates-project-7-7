import { useMemo, memo, RefObject } from 'react';
import styled from 'styled-components';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface EditorProps {
  quillRef: RefObject<ReactQuill>;
  htmlContent: string;
  setHtmlContent: (content: string) => void;
}
function TextEditor({ quillRef, htmlContent, setHtmlContent }: EditorProps) {
  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [
            'bold',
            'italic',
            'underline',
            'strike',
            { list: 'ordered' },
            { list: 'bullet' },
            'image',
            'link',
            { header: 1 },
            { header: 2 },
          ],
        ],
      },
    }),
    []
  );
  return (
    <TextEditorWrap>
      <ReactQuill
        ref={quillRef}
        value={htmlContent}
        onChange={setHtmlContent}
        modules={modules}
        theme="snow"
      />
    </TextEditorWrap>
  );
}

export default memo(TextEditor);
const TextEditorWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
  padding: 0;

  .quill {
    width: 100%;
    border: 0;
    > *.ql-snow {
      border: none;
    }
    .ql-toolbar {
      border-bottom: 1px solid #ccc;
    }
    .ql-formats {
      float: left;
    }
    .ql-container {
      height: 32vh;
      max-height: 240px;
      font-size: 16px;
      border: none;
      min-height: 50px;
      border-radius: 0px 0px 7px 7px;
      color: rgb(110, 110, 110);
    }
  }
`;
