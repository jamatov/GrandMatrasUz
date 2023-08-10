import React, {useState, useEffect} from 'react'
import logo from '../images/logo.svg'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

export default function Navbar({changeLang}) {
  const [active, setActive] = useState("nav-list");
  const [toggleIcon, setToggleIcon] = useState('nav__toggler');

  const[navbar, setNavbar] = useState(false)

  const { t } = useTranslation();
  const changeLanguage = (e)=>{
    changeLang(e.target.value)
    localStorage.setItem("LANGUAGE", e.target.value)
  }

  const changeNavbar = () => {
    if (window.scrollY >= 50) {
        setNavbar(true);
    } else {
        setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeNavbar);

  const navToggle = () => {
    active === "nav-list"
      ? setActive("nav-list nav__active")
      : setActive("nav-list");

    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  useEffect(() => {
  }, [])

  return (
    <nav className={`Navbar ${navbar ? 'navbarActive' : ''}`}>
      <div className="container">
        <div className="nav-body">
          <Link to='/' ><img src={logo} alt="logo" /></Link>

          <ul className={active}>
            <li><Link onClick={navToggle} to='/' >{t("asosiy")}</Link></li>
            <li><Link onClick={navToggle} to='/biz_haqimizda'>{t("about")}</Link></li>
            <li><Link onClick={navToggle} to='/mahsulotlar'>{t("products")}</Link></li>
            {/* <li><a href="">Aloqa</a></li> */}
            <select className="language" name="languages" id="languages" onChange={changeLanguage}>
              <option value="ru">Русский</option>
              <option value="uz">O’zbekcha</option>
            </select>
          </ul>

          <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </nav>
  )
}
