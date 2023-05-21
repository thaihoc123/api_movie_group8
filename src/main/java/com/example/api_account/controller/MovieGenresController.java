package com.example.api_account.controller;

import com.example.api_account.entity.Movie;
import com.example.api_account.entity.MovieGenres;
import com.example.api_account.repo.MovieGenresRepository;
import com.example.api_account.repo.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/movieGenres")
@CrossOrigin(origins = {"http://localhost:3000" ,"https://group8-power-of-love.netlify.app/"})
public class MovieGenresController {
    @Autowired
    MovieGenresRepository movieGenresRepository;
    @Autowired
    MovieRepository movieRepository;
    @GetMapping("/all")
    public List<MovieGenres> getAllMovieGenres(){
        return movieGenresRepository.findAll();
    }
    @GetMapping("byMovieId/{id}")
    public List<Movie> getMovieGenresByMovieId(@PathVariable int id){
        List<MovieGenres> movieGenresList = new ArrayList<>();
        Movie movie = movieRepository.findById(id).get();
        movieGenresList = movieGenresRepository.findByMovie(id);
        List<Movie> movieList = new ArrayList<>();
        for (MovieGenres movieGenres: movieGenresList) {
            movieList.add(movieGenres.getMovie());
        }
        return movieList;
    }
}
