export const formTypes = Object.freeze([
  {
    name: '텍스트',
    defaultLabel: '이름',
    type: 'text',
    placeholder: '플레이스홀더 예) 이름을 입력해주세요.',
  },
  {
    name: '전화번호',
    defaultLabel: '휴대폰 번호',
    type: 'phone',
    placeholder: '플레이스홀더 예) 010-1234-5678',
  },
  {
    name: '주소',
    defaultLabel: '배송지',
    type: 'address',
  },
  { name: '드롭다운', defaultLabel: '옵션1', type: 'select' },
  { name: '첨부파일', defaultLabel: '첨부파일', type: 'file' },
  { name: '이용약관', defaultLabel: '이용약관', type: 'agreement' },
]);

export const formTextTypes = Object.freeze(['text', 'phone']);

export const defaultField = Object.freeze({
  id: 'field_1',
  type: 'text',
  required: true,
  label: '',
  placeholder: '',
});
