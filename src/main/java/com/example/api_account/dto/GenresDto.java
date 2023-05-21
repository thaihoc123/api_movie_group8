package com.example.api_account.dto;

import java.util.HashSet;
import java.util.Set;

public class GenresDto {
    private int id;
    private String title;
    private Set<Integer>movies = new HashSet<>();

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Set<Integer> getMovies() {
        return movies;
    }

    public void setMovies(Set<Integer> movies) {
        this.movies = movies;
    }

    public GenresDto() {
    }

}
