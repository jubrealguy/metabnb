import imgLogo from '../img/logo-img.png';
import imgTxt from '../img/logo-txt.png';

function Navbar() {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={imgLogo} alt="" className="logo-1" />
                <img src={imgTxt} alt="" className="logo-2" />
            </div>
            <nav className="header__nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="##" className="nav-link">Home</a></li>
                    <li className="nav-item"><a href="##" className="nav-link">Place to stay</a></li>
                    <li className="nav-item"><a href="##" className="nav-link">NFTs</a></li>
                    <li className="nav-item"><a href="##" className="nav-link">Community</a></li>
                </ul>
            </nav>
            <div className="header__btn">
                <a href="##" className="header__btn-link">Connect wallet</a>
            </div>
        </header>
    )
}

export default Navbar;