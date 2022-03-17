export interface buttonProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  type?: 'link' | 'text' | 'default' | 'ghost' | 'primary' | 'dashed' | undefined;
  htmlType?: 'submit' | 'button' | 'reset';
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}
