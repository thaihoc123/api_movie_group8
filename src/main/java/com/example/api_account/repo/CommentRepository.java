package com.example.api_account.repo;

import com.example.api_account.dto.CommentDto;
import com.example.api_account.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment,Integer> {
    List<Comment>findAllByOrderByTimeDesc();

    @Query(value = "select * from comment where id_movie=:id order by time desc", nativeQuery = true)
    List<Comment>getCommentByMovieOrderByTimeDesc(int id);
    @Query(value = "select * from comment where id_movie=:id", nativeQuery = true)
    List<Comment> getCommentByMovie(int id);

    @Query(value = "select c.title,c.time,a.email from comment c join account a on c.id_account=a.id where id_movie=:id", nativeQuery = true)
    List<Object[]> getCommentDtoByMovie(int id);

    @Query(value = "select c.id,c.title,c.time,a.email from comment c join account a on c.id_account=a.id where id_movie=:id order by time desc, id_account desc", nativeQuery = true)
    List<Object[]> getCommentDtoByMovieOrderByTime(int id);
    @Query(value = "INSERT INTO comment (`title`, `time`, `id_account`, `id_movie`) VALUES (:title, :time, :id_account, :id_movie);", nativeQuery = true)
    Comment addComment(String title, String time, int id_account, int id_movie);
}
