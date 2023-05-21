package com.example.api_account.controller;

import com.example.api_account.entity.Cast;
import com.example.api_account.repo.CastRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000" ,"https://group8-power-of-love.netlify.app/"})
@RequestMapping("/api/cast")
public class CastController {
    @Autowired
    CastRepository castRepository;

    @GetMapping("/byMovie/{id}")
    public List<Cast>getCastByMovie(@PathVariable int id){
        return castRepository.getCastByMovie(id);
    }
}
