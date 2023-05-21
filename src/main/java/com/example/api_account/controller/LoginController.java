package com.example.api_account.controller;

import com.example.api_account.dto.LoginDto;
import com.example.api_account.entity.Account;
import com.example.api_account.repo.LoginRepository;
import com.example.api_account.response.Message;
import com.example.api_account.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = {"http://localhost:3000" ,"https://group8-power-of-love.netlify.app/"})
@RequestMapping("/api/login")
public class LoginController {

    @Autowired
    private LoginService loginService;

    @Autowired
    private LoginRepository loginRepository;

    @GetMapping("/getAll")
    public ResponseEntity<?> getAllAccount() {
        return ResponseEntity.ok(loginRepository.findAll());
    }
    @GetMapping("/getByEmail/{email}")
    public Account accountByEmail(@PathVariable String email){
        return loginRepository.findByEmail(email);
    }
    @PostMapping("/signup")
    public String signUp(@RequestBody Account account) {

        return  loginService.login(account);
    }

    @PostMapping("/signin")
    public ResponseEntity<?>loginAccount(@RequestBody LoginDto loginDto){
        Message message = loginService.loginMessage(loginDto);
        return ResponseEntity.ok(message);
    }
}
