
import { NavLink } from 'react-router-dom';
import './styles.css';

const Movies = () => {
  return (
    <div className="movies-containers">
      <h1>LISTA DE FILMES</h1>

      <NavLink to="/movies/1">
        <p>Acessar /Movies/2</p>
      </NavLink>

      <NavLink to="/movies/2">
        <p>Acessar /Movies/2</p>
      </NavLink>
    </div>
  );
};
export default Movies;
