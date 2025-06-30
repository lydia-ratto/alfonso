import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import alfonsoLogo from '@/assets/alfonso-logo-transparent.png';
import { Link } from 'react-router-dom';
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
          <div className={`
            ${styles.logoContainer}
            ${isMenuOpen ? styles.open : ''}
          `}>
            <Link to="/">
              <img src={alfonsoLogo} alt="Alfonso Gelateria logo" className={styles.logo} />
            </Link>
          </div>
          {isMobileView && isMenuOpen
            ? <div>
              <div className={`${styles.menuLinks} primaryText ${showMenuContent ? styles.fadeIn : ''}`}>
                <Link to="/our-gelato">Our gelato</Link>
                <Link to="/about">About us</Link>
                <Link to="/wholesale">Wholesale</Link>
                <Link to="/contact">Contact us</Link>
              </div>

            </div>
            : ''
          }
        </div>
        {isMobileView ?
          <div className={`${styles.content}`}>
            {/* Burger menu and limited links */}
            <div className="left">
              <MenuIcon isOpen={isMenuOpen} onClick={toggleMenu}/>
            </div>
            <div className={styles.mainNavbarLinks}>
              <Link to="/find-us">Find us</Link>
              {/* <CartIcon /> */}
            </div>
          </div>
          : <div className={`${styles.content} ${styles.mainNavbarLinks}`}>
            <Link to="/our-gelato">Our gelato</Link>
            <Link to="/about">About</Link>
            <Link to="/wholesale">Wholesale</Link>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact us</Link>
          </div>
        }
        {isMobileView ?
          <ButtonGroup className={styles.menuButtons}>
            <Button>Find us</Button>
            <Button>Gift voucher</Button>
          </ButtonGroup>
        : ''
        }
      </nav>
    );
}

export default Navbar;
