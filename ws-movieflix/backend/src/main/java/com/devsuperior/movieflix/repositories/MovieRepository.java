package com.devsuperior.movieflix.repositories;


import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.entities.Movie;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {
	 
	//@Query("SELECT DISTINCT obj FROM Genre obj INNER JOIN obj.movies movs WHERE "
	//		+ "(COALESCE(:movies) IS NULL OR movs IN :movies) AND "
	//		+ "(LOWER(obj.genreid) LIKE LOWER(CONCAT('%',:genreId,'%'))) ")
	//Page<Genre> find1(List<Movie> movies, Long genreId, Pageable pageable);
	
	@Query("   SELECT DISTINCT obj FROM Movie obj INNER JOIN obj.genre grs"
			+ " WHERE ( COALESCE( :genre ) IS NULL OR grs IN :genre ) "
			+ " ORDER BY obj.title")
	Page<Movie> findMoviesByGenre(List<Genre> genre, Pageable pageable);
	
	
}
