import { ReactComponent as UserImage } from 'assets/images/image 3.svg';
import './styles.css';

const MoviesDetails = () => {
  return (
    <div className="movie-container">
      <h1 className="">Tela detalhes do filme id:</h1>
      <form className="base-card">
        <div className="form-container-content base-card">
          <div className="form-container">
            <input
              type="text"
              name="git"
              className="search-input form-control"
              placeholder="Deixe sua avaliação aqui"
            />
            <button type="submit" className="btn btn-primary search-button">
              SAVAR AVAIAÇÃO
            </button>
          </div>
        </div>
      </form>
      <div className="movie-card base-card">
          <div>
              <UserImage/>
              <p>Marina</p>

          </div>
          <div>
            <label htmlFor="">Lorem ipsum lorem ipsum</label>
          </div>
        
      </div>
    </div>
  );
};

export default MoviesDetails;
