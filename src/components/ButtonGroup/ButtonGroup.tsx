import styles from './ButtonGroup.module.css';

interface ButtonGroupProps {
    children: React.ReactNode;
    direction?: 'row' | 'column';
    className?: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  direction = 'row',
  className,
  ...rest
}) => {
const classNames = [
    styles.buttonGroup,
    styles[direction],
    className,
  ].filter(Boolean).join(' ');
 return (
    <div
      className={classNames}
      {...rest}
    >
      {children}
    </div>
  );
}

export default ButtonGroup;
