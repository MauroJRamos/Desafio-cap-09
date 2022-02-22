import './styles.css';



import { Movies } from 'types/movies';

type Props = {
    movies: Movies

}

const MovieCard = ( { movies } : Props) => {

    return (
        <div className="base-card Movie-card">
            <div className="card-top-container">
                <img src={movies.imgUrl} alt={movies.title} />
            </div>
            <div className="card-bottom-container-title">
                <h4>{movies.title}</h4>  
            </div>
            <div className="card-bottom-container-year">
                <h5>{movies.year}</h5>  
            </div>
            <div className="card-bottom-container-sinopse">
                <p>{movies.subTitle}</p>  
            </div>
        </div>
    );
}

export default MovieCard;