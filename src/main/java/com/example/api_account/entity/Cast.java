package com.example.api_account.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "cast")
public class Cast {

    @Id
    private int id;

    private String name;

    private String img;

    @OneToMany(mappedBy = "cast", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<MovieCast> movieCast;
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}
