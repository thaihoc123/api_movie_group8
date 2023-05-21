package com.example.api_account.repo;

import com.example.api_account.entity.MovieGenres;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieGenresRepository extends JpaRepository<MovieGenres, Integer> {
    List<MovieGenres> findByMovie(int id);
}
