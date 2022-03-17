import { CSSProp } from 'styled-components';

type MediaQueryProps = {
  createForm: number;
  mobile: number;
  tablet: number;
  desktop: number;
};

const sizes: MediaQueryProps = {
  createForm: 500,
  mobile: 480,
  tablet: 768,
  desktop: 1024,
};

const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce((acc, label) => {
  acc[label] = (style: string) => `@media (max-width: ${sizes[label] / 16}em) { ${style} }`;
  return acc;
}, {} as { [key in keyof typeof sizes]: (style: string) => CSSProp });

const color = {
  blue: '#0164FF',
  black: '#191919',
  lightBlue: '#C4E4FE',
  lightGray: '#F8F9FA',
  fontColor: '#495057',
  fontBlue: '#0065ff',
  fontTitleColor: '#212529',
};

const button = {
  blue: {
    backgroundColor: color.blue,
    color: 'white',
  },
  lightgray: {
    backgroundColor: color.lightGray,
    border: '1px solid lightgray',
    color: '#333333',
  },
};

const size = {
  headerHeight: '56px',
  toolHeight: '40px',
};
const theme = {
  color,
  button,
  size,
  ...media,
};

export default theme;
