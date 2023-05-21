package com.example.api_account.controller;

import com.example.api_account.entity.Comment;
import com.example.api_account.repo.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000" ,"https://group8-power-of-love.netlify.app/"})
@RequestMapping("/api/comment")
public class CommentController {
    @Autowired
    private CommentRepository commentRepository;


    @GetMapping("/getAll")
    public List<Comment>getAllComment(){
        return commentRepository.findAll();
    }

    @GetMapping("/getAllOrderByTime")
    public List<Comment>getAllCommentOrderByTime(){
        return commentRepository.findAllByOrderByTimeDesc();
    }
    @GetMapping("/byMovie/{id}")
    public List<Comment>getCommentByMovie(@PathVariable int id){
        return commentRepository.getCommentByMovie(id);
    }


    @GetMapping("/byMovieDto/{id}")
    public List<Object[]>getCommentDtoByMovie(@PathVariable int id){
        return commentRepository.getCommentDtoByMovie(id);
    }
    @GetMapping("/byMovieDtoOrderByTime/{id}")
    public List<Object[]>getCommentDtoByMovieOrderByTime(@PathVariable int id){
        return commentRepository.getCommentDtoByMovieOrderByTime(id);
    }

    @PostMapping("/add")
    public Comment addComment(@RequestBody Comment comment){
            return commentRepository.save(comment);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteComment(@PathVariable int id){
        commentRepository.deleteById(id);
    }
}
