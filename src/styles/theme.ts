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
};

export default theme;
