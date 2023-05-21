package com.example.api_account.repo;

import com.example.api_account.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie,Integer> {
    @Query(value="select m.* from genres g join movie_genres mg on g.id=mg.id_genres join movie m on mg.id_movie=m.id where g.title=:name", nativeQuery = true)
    List<Movie> getMovieByGenres(String name);

    @Query(value="select m.* from category c join movie_category mc on c.id=mc.id_category join movie m on mc.id_movie=m.id where c.name=:name", nativeQuery = true)
    List<Movie> getMovieByCategory(String name);
    @Query(value="SELECT * FROM movie where title like :keyword" , nativeQuery = true)
    List<Movie> getMovieByKeyword(String keyword);
}
