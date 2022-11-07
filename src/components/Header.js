import { Link }  from 'react-router-dom'

const Header = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Accueil</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="nav-link">Ajouter un produit</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">Notre entreprise</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Header;