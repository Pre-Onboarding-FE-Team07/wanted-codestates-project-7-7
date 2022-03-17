import styled from 'styled-components';

function TextEditor() {
  return <TextEditorWrap></TextEditorWrap>;
}

export default TextEditor;

const TextEditorWrap = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  font-size: 1.4rem;
`;
