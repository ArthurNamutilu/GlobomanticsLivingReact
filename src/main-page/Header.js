import logo from "./GloboLogo.png"

const Header = () => ( 
        <header className="row">
            <div className="col-md-5">
                <img src={logo} alt="logo" className="logo"/>
            </div>
            <div className="col-md-7 mt-5 subtitle">
                Providing houses all over Kenya
            </div>
        </header>
     );
 
export default Header;