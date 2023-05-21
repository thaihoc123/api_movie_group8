package com.example.api_account.controller;

import com.example.api_account.entity.Movie;
import com.example.api_account.repo.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000" ,"https://group8-power-of-love.netlify.app/"})
@RequestMapping("/api/movie")
public class MovieController {
    @Autowired
    private MovieRepository movieRepository;

    @GetMapping("/getAll")
    public List<Movie> getAllMovie() {
        return movieRepository.findAll();
    }

    @GetMapping("/getMovieByGenres/{name}")
    public List<Movie> getMovieByGenres(@PathVariable String name) {
        return movieRepository.getMovieByGenres(name);
    }

    @GetMapping("/getMovieByCategory/{name}")
    public List<Movie> getMovieByCategory(@PathVariable String name) {
        return movieRepository.getMovieByCategory(name);
    }
    @GetMapping("/getMovie/{id}")
    public ResponseEntity<Movie> getMovieById(@PathVariable int id) {
        Movie movie = movieRepository.findById(id).orElse(null);
        if (movie == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(movie, HttpStatus.OK);
    }

    @GetMapping("/getMovieByKeyword/{keyword}")
    public List<Movie> getMovieByKeyword(@PathVariable String keyword) {
        return movieRepository.getMovieByKeyword("%"+keyword+"%");
    }
}
