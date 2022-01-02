import './styles.css';
import 'bootstrap/js/src/collapse.js';

import { Link } from 'react-router-dom';

import { useContext, useEffect } from 'react';
import history from 'util/history';
import { AuthContext } from 'AuthContext';
import { getTokenData, isAuthenticated } from 'util/auth';
import { removeAuthData } from 'util/storage';


const Navbar = () => {
  //Com o useContext o componete navBar poderá monitorar o estado global do tipo AuthContext
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history.replace('/');
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>MovieFlix</h4>
        </Link>

        <div className="nav-login-logout">
          {authContextData.authenticated ? (
            <>
              <a href="#Logout" onClick={handleLogoutClick}>
              <button type="button" className="btn btn-outline-primary">SAIR</button>
              </a>
            </>
          ): (<p></p>)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
