
import { slide as Menu } from 'react-burger-menu'

export default function Hamburger(){
    var styles = {
    //     bmBurgerButton: {
    //       position: 'none',
    //       width: '50px',
    //       height: '50px',

        
    //     },
    //     bmBurgerBars: {
    //       background: '#373a47'
    //     },
    //     bmBurgerBarsHover: {
    //       background: '#a90000'
    //     },
    //     bmCrossButton: {
    //       height: '24px',
    //       width: '24px'
    //     },
    //     bmCross: {
    //       background: '#bdc3c7'
    //     },
        bmMenuWrap: {
            width: "40%",
          position: 'fixed',
          height: '100%'
        },
    //     bmMenu: {
    //       background: '#373a47',
    //       padding: '2.5em 1.5em 0',
    //       fontSize: '1.15em'
    //     },
    //     bmMorphShape: {
    //       fill: '#373a47'
    //     },
    //     bmItemList: {
    //       color: '#b8b7ad',
    //       padding: '0.8em'
    //     },
    //     bmItem: {
    //       display: 'inline-block'
    //     },
    //     bmOverlay: {
    //       background: 'rgba(0, 0, 0, 0.3)'
    //     }
      }
    return(
        <Menu styles={ styles } customCrossIcon={ <img src="/burgerClose.svg" /> } customBurgerIcon={ <img src="/burger-menu.svg" /> } width={ '20%' }  right  pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
           <a id="home" className="menu-item" href="/">Головна</a>
        <a id="about" className="menu-item" href="/documents">Послуги</a>
        <a id="contact" className="menu-item" href="/contact">Контакти</a>
        <a  className="menu-item--small" href="/news">Новини</a>
       
        </Menu>
    )
}