package com.example.api_account.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import jakarta.persistence.*;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "movie")
@JsonSerialize
public class Movie {

    @Id
    private int id;
    @Column(name = "title")
    private String title;
    @Column(name = "description")
    private String description;
    @Column(name = "trailer")

    private String trailer;
    @Column(name = "img")
    private String img;
    @Column(name = "link")
    private String link;

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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getTrailer() {
        return trailer;
    }

    public void setTrailer(String trailer) {
        this.trailer = trailer;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }



    @OneToMany(fetch = FetchType.LAZY, mappedBy = "movie",cascade = CascadeType.ALL)
    private List<MovieGenres> listGenres;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "movie",cascade = CascadeType.ALL)
    private List<MovieCast> listCast;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "movie",cascade = CascadeType.ALL)
    private List<MovieCategory> listCategory;
    public List<MovieGenres> getListGenres() {
        return listGenres;
    }


    @Override
    public String toString() {
        return "Movie{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", trailer='" + trailer + '\'' +
                ", img='" + img + '\'' +
                ", link='" + link + '\'' +
                ", listGenres=" + listGenres +
                '}';
    }
}
