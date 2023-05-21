package com.example.api_account.repo;

import com.example.api_account.entity.Cast;
import com.example.api_account.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer> {
    @Query(value = "select c.* from movie m join movie_category mc on m.id=mc.id_movie join category c on mc.id_category=c.id where m.id=:id", nativeQuery = true)
    List<Category> getCategoryByMovie(int id);
}
