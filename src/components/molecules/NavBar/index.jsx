import styles from "./styles.module.scss";
import React, { useState } from "react";
import Hamburguer from '../../../assets/images/Hamburguer.png'
import Close from '../../../assets/images/Close.png'

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(true);

  return (
    <nav className={styles[`nav`]}>
      <div className={styles[`nav__internal`]}>
        <div className={styles[`nav__menu`]}>
          <ul className={styles[`nav__list`]}>
            
            <li className={styles[`nav__item`]}>
             
                <a className={styles[`nav__link`]}>Home</a>
              
            </li>
            <li className={styles[`nav__item`]}>
              
                <a className={styles[`nav__link`]}>Serviços</a>
              
            </li>
            <li className={styles[`nav__item`]}>
              
                <a className={styles[`nav__link`]}>Team</a>
              
            </li>
            <li className={styles[`nav__item`]}>
             
                <a className={styles[`nav__link`]}>Contato</a>
              
            </li>
          </ul>
          <ul className={styles[`nav__list--mobile`]}>
            {showMenu ? (
              <button
                className={styles[`nav__open`]}
                onClick={() => setShowMenu(false)}
              >
               <img
                  src={Hamburguer}
                  alt="Open menu"
                /> 
              </button>
            ) : (
              <>
              
                <button
                  className={styles[`nav__close`]}
                  onClick={() => setShowMenu(true)}
                >
                  <img
                    src={Close}
                    alt="Close Menu"
                  /> 
                </button>
                <li className={styles[`nav__item`]}>
                  
                    <a
                      className={styles[`nav__link`]}
                      onClick={() => setShowMenu(true)}
                    >
                      Home
                    </a>
               
                </li>
                <li className={styles[`nav__item`]}>
                  
                    <a
                      className={styles[`nav__link`]}
                      onClick={() => setShowMenu(true)}
                    >
                      Serviços
                    </a>
                  
                </li>
                <li className={styles[`nav__item`]}>
                  
                    <a
                      className={styles[`nav__link`]}
                      onClick={() => setShowMenu(true)}
                    >
                      Team
                    </a>
                  
                </li>
                <li className={styles[`nav__item`]}>
                  
                    <a
                      className={styles[`nav__link`]}
                      onClick={() => setShowMenu(true)}
                    >
                     Contato
                    </a>
                 
                </li>
              
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
