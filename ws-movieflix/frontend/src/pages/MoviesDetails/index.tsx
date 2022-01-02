import { ReactComponent as UserImage } from 'assets/images/image 3.svg';
import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Reviews } from 'types/reviews';
import { SpringPage } from 'types/vendor/spring';
import { hasAnyRoles } from 'util/auth';
import { requestBackend } from 'util/requests';


import './styles.css';


const MoviesDetails = () => {
  
 
  const [page, setPage] = useState<SpringPage<Reviews>>();
 
  useEffect(() => {
    const params : AxiosRequestConfig = {
      url: '/movies/1/reviews',
      withCredentials: true,
      
    };
 
    requestBackend(params).then((response) => {
      setPage(response.data);
      console.log(page);
    });
  }, []);


  

  return (
    <div className="movie-container">
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
    
      <div className="movie-card base-card" >
        <div className="movie-card-user">
          <UserImage />
          <p >Marina</p>
        </div>
        <div className="movie-card-text">
           <div>
              <label htmlFor="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</label>
           </div>
        </div>
        
      </div>
    
    </div>
  );
};

export default MoviesDetails;
