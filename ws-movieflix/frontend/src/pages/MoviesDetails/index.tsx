import { ReactComponent as UserImage } from 'assets/images/image 3.svg';
import { AxiosRequestConfig } from 'axios';
import { Movies } from 'types/movies';

import { useEffect, useState } from 'react';
import { hasAnyRoles } from 'util/auth';
import { Reviews } from 'types/reviews';
import { useParams } from 'react-router-dom';
import './styles.css';
import { requestBackend } from 'util/requests';



type UrlParams = {
  movieId: string;
};

const MoviesDetails = () => {
  const [page, setPage] = useState<Reviews[]>([]);

  const { movieId } = useParams<UrlParams>();

  const [movie, setMovie] = useState<Movies>();

  useEffect(() => {
    const params1: AxiosRequestConfig = {
      url: '/movies/1',
      withCredentials: true,
    };

    requestBackend(params1).then((response) => {
      console.log(response);
      setMovie(response.data);
    });

  }, [movieId]);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: '/movies/1/reviews',
      withCredentials: true,
    };

    requestBackend(params).then((response) => {
      console.log(response);
      setPage(response.data);
    });
  }, []);

  return (
    <div className="movie-container">
      <div className="base-card product-card">
        <div className="card-top-container">
          <img src={movie?.imgUrl} alt={movie?.title} />
        </div>
        <div className="card-bottom-container-title">
          <h4>{movie?.title}</h4>
        </div>
        <div className="card-bottom-container-year">
          <h5>{movie?.year}</h5>
        </div>
        <div className="card-bottom-container-sinopse">
          <p>{movie?.subTitle}</p>
        </div>
        <div className='card-bottom-container-sinopse'>
            <p>{movie?.synopsis}</p>
        </div>
      </div>

      <h1 className="">Tela detalhes do filme id:</h1>
      {hasAnyRoles(['ROLE_MEMBER']) && (
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
                SALVAR AVALIAÇÃO
              </button>
            </div>
          </div>
        </form>
      )}

      <div className="movie-card base-card">
        <ul>
          <div>
            {page.map((review) => (
              <li key={review.id}>
                <div className="movie-card-user">
                  <UserImage /> <p>{review.user.name} </p>
                </div>
                <div className="movie-card-text">
                  <label htmlFor="">
                    <p>{review.text}</p>
                  </label>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MoviesDetails;
