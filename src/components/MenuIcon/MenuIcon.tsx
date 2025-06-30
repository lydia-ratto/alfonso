import styles from "@/components/MenuIcon/MenuIcon.module.css"

interface MenuIconProps {
    children?: React.ReactNode;
    isOpen: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

const MenuIcon: React.FC<MenuIconProps> = ({
  isOpen = false,
  onClick,
}) => {

  return (
    <button className={styles.burgerButton} onClick={onClick} aria-label="Toggle navigation">
      <div className={`${styles.burgerLine} ${isOpen ? styles.open : ''}`}></div>
      <div className={`${styles.burgerLine} ${isOpen ? styles.open : ''}`}></div>
      <div className={`${styles.burgerLine} ${isOpen ? styles.open : ''}`}></div>
    </button>
  )
}

export default MenuIcon;
