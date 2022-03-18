import { memo, useState, useRef, useCallback, useContext, useMemo } from 'react';
import FieldTools from './FieldTools';
import TextEditor from './TextEditor';
import ReactQuill from 'react-quill';
import { updateFieldData } from 'context/actions/field';
import { FieldContext } from 'context/FieldContext';

function FieldDatas() {
  const { fieldState, fieldDispatch } = useContext(FieldContext);
  const field = useMemo(() => fieldState.field, [fieldState.field]);
  const quillRef = useRef<ReactQuill>(null);
  const [htmlContent, setHtmlContent] = useState<string>('');
  console.log('update_fielddata' + field.id);
  const updateContent = useCallback(
    (content: string) => {
      setHtmlContent(content);
      console.log('[HTML_CONTENT]');
      const key = field.type === 'file' ? 'description' : 'contents';
      fieldDispatch(updateFieldData({ [key]: content }));
    },
    [setHtmlContent, fieldDispatch, field.type]
  );

  return (
    <>
      <FieldTools />
      <TextEditor quillRef={quillRef} htmlContent={htmlContent} setHtmlContent={updateContent} />
    </>
  );
}
export default memo(FieldDatas);
