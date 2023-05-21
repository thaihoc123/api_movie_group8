package com.example.api_account.controller;

import com.example.api_account.entity.Category;
import com.example.api_account.repo.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = {"http://localhost:3000" ,"https://group8-power-of-love.netlify.app/"})
@RequestMapping("/api/category")
public class CategoryController {

    @Autowired
    CategoryRepository categoryRepository;

    @RequestMapping("/getAll")
    public List<Category>getAllCategory(){
        return categoryRepository.findAll();
    }

    @RequestMapping("/byMovie/{id}")
    public List<Category>getCategoryByMovie(@PathVariable int id){
        return categoryRepository.getCategoryByMovie(id);
    }
}
