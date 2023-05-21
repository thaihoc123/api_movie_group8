package com.example.api_account.repo;

import com.example.api_account.entity.Genres;
import com.example.api_account.entity.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface GenresRepository extends JpaRepository<Genres,Integer> {

}
