import { ReactComponent as AuthImage } from 'assets/images/Desenho.svg';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';

 
import './styles.css';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-banner-container">
        <h1>Avalie Filmes</h1>
        <p>
          Diga o que você achou do seu filme favorito
        </p>
        <AuthImage />
      </div>
      <div className="auth-form-container">
        <Switch>
          <Route path="/admin/auth/login">
            <Login/>
          </Route>
          <Route path="/admin/auth/singup">
            <h1>CARD SINGUP</h1>
          </Route>
          <Route path="/admin/auth/recover">
            <h1>CARD RECOVER</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Auth;
