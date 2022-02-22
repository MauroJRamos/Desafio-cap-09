import { Router, Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar';
import history from 'util/history';
import Auth from 'pages/Admin/Auth';
import MoviesDetails from 'pages/MoviesDetails';
import MoviesList from 'pages/MoviesList';

const Routes = () => (
  //com o history é possivel executar  rederecionameto de rotas
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
       <Auth/>
      </Route>
      <Route path="/movies" exact>
        <MoviesList/>
      </Route>
      <Route path="/movies/:moviesId">
        <MoviesDetails/>
      </Route>
    </Switch>
  </Router>
);

export default Routes;
