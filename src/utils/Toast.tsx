import { message } from 'antd';

const Toast = (type: string, msg: string) => {
  if (type === 'error') {
    message.error(msg);
  } else if (type === 'warning') {
    message.warning(msg);
  } else {
    message.success(msg);
  }
};
export default Toast;
