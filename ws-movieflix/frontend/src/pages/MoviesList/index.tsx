
import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Movies } from 'types/movies';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/requests';
import MovieCard from 'components/MovieCard';
import MovieFilter, { MovieFilterData } from 'components/MovieFilter';

import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: MovieFilterData;
};

const MoviesList = () => {
  const [page, setPage] = useState<SpringPage<Movies>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { name: '', genre: null },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber, filterData: controlComponentsData.filterData });
  };
 
  const handleSubmitFilter = (data: MovieFilterData) => {
    setControlComponentsData({ activePage: 0, filterData: data });   
  };
  

  const getProducts = (pageNumber: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      withCredentials: true,
      params: {
        page: pageNumber,
        size: 4,
      },
    };

    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
     ;
  }

  useEffect(() => {
    getProducts(0);
  }, []);

  return (
    <div className="container my-4 catalog-container">
      <div className="row catalog-title-container">
        <div>
          
        </div>

        <h1>Catálogo de Filmes</h1>
      </div>

      <div className="row">
        {
          page?.content.map((movies) => (
            <div className="col-sm-6 col-lg-4 col-xl-3" key={movies.id}>
              <Link to="/movies/1">
                <MovieCard movies={movies} />
              </Link>
            </div>
          ))}
      </div>

      <div className="row">
        <Pagination 
          pageCount={page ? page.totalPages : 0} 
          range={3} 
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};
export default MoviesList;
