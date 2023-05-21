package com.example.api_account.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "genres")
public class Genres {

    @Id
    private int id;
    @Column(name = "title")
    private String title;

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



    public void setListMovie(List<MovieGenres> movieGenres) {
        this.movieGenres = movieGenres;
    }

    public List<MovieGenres> getMovieGenres() {
        return movieGenres;
    }

    @OneToMany(fetch = FetchType.LAZY,mappedBy = "genres",cascade = CascadeType.ALL)
//    @JsonIgnore
    private List<MovieGenres> movieGenres;

    @Override
    public String toString() {
        return "Genres{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", listMovie=" + movieGenres +
                '}';
    }
}
