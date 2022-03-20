import { Phone, PostCode, File, Agreement, SelectBox, Name } from '../components/WrtieForm/index';
import { FieldType, FieldListType } from 'interfaces/createForm.d';

interface Props {
  matchData: FieldListType;
  setAddress?: (value: string) => void;
  setUrl?: (value: string) => void;
}

function WriteFormWrap({ matchData, setUrl, setAddress }: Props) {
  const tempAction = () => {
    return;
  };
  const componentType = (item: FieldType) => {
    switch (item.type) {
      case 'text':
        return <Name item={item} />;
      case 'phone':
        return <Phone item={item} />;
      case 'address':
        return <PostCode setAddress={setAddress || tempAction} item={item} />;
      case 'select':
        return <SelectBox item={item} />;
      case 'file':
        return <File setUrl={setUrl || tempAction} item={item} />;
      case 'agreement':
        return <Agreement item={item} />;
      default:
        return null;
    }
  };

  return (
    <>
      {matchData?.map((item, index) => (
        <div key={index}>{componentType(item)}</div>
      ))}
    </>
  );
}

export default WriteFormWrap;
