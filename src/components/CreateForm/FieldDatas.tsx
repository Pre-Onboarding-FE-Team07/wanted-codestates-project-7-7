import { memo, useState, useRef, useCallback, useContext, useMemo, useEffect } from 'react';
import FieldTools from './FieldTools';
import TextEditor from './TextEditor';
import ReactQuill from 'react-quill';
import { FieldContext } from 'context/FieldContext';
import { FormDataContext } from 'context/FormDataContext';
import { updateFieldData } from 'context/actions/field';
import { updateField } from 'context/actions/formData';

function FieldDatas() {
  const { dispatch } = useContext(FormDataContext);
  const { fieldState, fieldDispatch } = useContext(FieldContext);
  const field = useMemo(() => fieldState.field, [fieldState.field]);
  const quillRef = useRef<ReactQuill>(null);
  const [htmlContent, setHtmlContent] = useState<string>('');

  const updateContent = useCallback(
    (content: string) => {
      const key = field.type === 'file' ? 'description' : 'contents';
      setHtmlContent(content);
      fieldDispatch(updateFieldData({ [key]: content }));
    },
    [setHtmlContent, fieldDispatch, field.type]
  );

  useEffect(() => {
    dispatch(updateField(field));
  }, [field, dispatch]);

  return (
    <>
      <FieldTools />
      <TextEditor quillRef={quillRef} htmlContent={htmlContent} setHtmlContent={updateContent} />
    </>
  );
}
export default memo(FieldDatas);
