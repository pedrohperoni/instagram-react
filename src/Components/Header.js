import { IoPaperPlaneOutline, IoCompassOutline, IoHeartOutline , IoPersonOutline, IoLogoInstagram} from "react-icons/io5";
import logo from '../assets/img/logo.png'

function Header(){
    return(
    <div className="navbar">
        <div className="container">
          <div className="logo">
            <IoLogoInstagram />
            <div className="separador"></div>
            <img src={logo} alt="logo"/>
          </div>

          <div className="logo-mobile">
          <IoLogoInstagram />
          </div>

          <div className="instagram-mobile">
            <img src={logo} alt="logo" />
          </div>
  
          <div className="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div className="icones">
            <IoPaperPlaneOutline />
            <IoCompassOutline />
            <IoHeartOutline />
            <IoPersonOutline />
          </div>

          <div className="icones-mobile">
            <IoPaperPlaneOutline />
          </div>
        </div>
      </div>
    )

}

export default Header