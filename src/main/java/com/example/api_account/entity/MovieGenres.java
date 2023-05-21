package com.example.api_account.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

@Entity
@Table(name = "movie_genres")
public class MovieGenres {
   @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_movie")
    @JsonIgnore
    private Movie movie;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id_genres")
    @JsonIgnore
    private Genres genres;

 public int getId() {
  return id;
 }

 public void setId(int id) {
  this.id = id;
 }

 public Movie getMovie() {
  return movie;
 }

 public void setMovie(Movie movie) {
  this.movie = movie;
 }

 public Genres getGenres() {
  return genres;
 }

 public void setGenres(Genres genres) {
  this.genres = genres;
 }
}
