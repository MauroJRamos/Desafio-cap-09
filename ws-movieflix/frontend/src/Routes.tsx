import { Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import history from 'util/history';
import Auth from 'pages/Admin/Auth';
import Movies from 'pages/Movies';
import MoviesDetails from 'pages/MoviesDetails';

const Routes = () => (
  //com o history é possivel executar  rederecionameto de rotas
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
       <Auth/>
      </Route>
      <Route path="/movies" exact>
        <Movies/>
      </Route>
      <Route path="/movies/:moviesid">
        <MoviesDetails/>
      </Route>
    </Switch>
  </Router>
);

export default Routes;
