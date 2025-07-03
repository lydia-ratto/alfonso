import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import alfonsoLogo from '@/assets/alfonso-logo-transparent.png';
import { Link } from 'react-router-dom';
import appStyles from '@/App.module.css'
import MenuIcon from '@/components/MenuIcon/MenuIcon';
import ButtonGroup from '@/components/ButtonGroup/ButtonGroup';
import Button from '@/components/Button/Button';
import "../../../src/theme.css";


interface NavbarProps {
  isMenuOpen: boolean;
  isMobileView: boolean;
  toggleMenu: () => void
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, isMobileView, toggleMenu }) => {
  const [showMenuContent, setShowMenuContent] = useState(false);

  // Used to set fade-in styling to nav links on menu click
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (isMenuOpen && isMobileView) {
      timer = setTimeout(() => {
        setShowMenuContent(true);
      }, 150);
    } else {
      setShowMenuContent(false);
      if (timer) {
        clearTimeout(timer);
      }
    }
    return () => {
      // Cleanup
      clearTimeout(timer);
    };
  }, [isMenuOpen, isMobileView]);

  return (
      <nav>
        <div className={`${styles.brandContainer} ${isMenuOpen ? styles.open : ''}`}>
          <div className={`
            ${styles.logoBackground}
            ${isMenuOpen ? styles.open : ''}
          `} />
          <Link to="/">
            <div className={`
              ${styles.logoContainer}
              ${isMenuOpen ? styles.open : ''}
            `}>
                <img src={alfonsoLogo} alt="Alfonso Gelateria logo" className={styles.logo} />
            </div>
          </Link>
          {isMobileView && isMenuOpen
          ? <div className={`${styles.menuLinks} primaryText ${showMenuContent ? styles.fadeIn : ''}`}>
              <Link to="/our-gelato">Our gelato</Link>
              <Link to="/about">About us</Link>
              <Link to="/wholesale">Wholesale</Link>
              <Link to="/contact">Contact us</Link>
            </div>
            : ''
          }
        </div>
        {isMobileView
        ? <div className={`${styles.linksContainer}`}>
            {/* Burger menu and limited links */}
            <div className="left">
              <MenuIcon isOpen={isMenuOpen} onClick={toggleMenu}/>
            </div>
            <div className={styles.linksRight}>
              <Link to="/find-us" className={styles.link}>Find us</Link>
              {/* <CartIcon /> */}
            </div>
          </div>
        : <div className={styles.linksContainer}>
            <div className={styles.linksLeft}>
              <Link to="/our-gelato" className={styles.link}>Our gelato</Link>
              <Link to="/about" className={styles.link}>About</Link>
            </div>
            <div className={styles.linksRight}>
              <Link to="/wholesale" className={styles.link}>Wholesale</Link>
              <Link to="/contact" className={styles.link}>Contact us</Link>
            </div>
          </div>
        }
        {isMobileView && isMenuOpen ?
          <ButtonGroup
              direction='row'
              className={
                `${styles.menuButtons}
                ${showMenuContent ? styles.fadeIn : ''}
                ${appStyles.padding}`}>
            <Button to="/shops">Find us</Button>
            <Button
              variant='secondary'
              to='/gift-form'
            >
              Voucher
            </Button>
          </ButtonGroup>
        : ''
        }
      </nav>
    );
}

export default Navbar;
