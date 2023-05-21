package com.example.api_account.service;

import com.example.api_account.dto.LoginDto;
import com.example.api_account.entity.Account;
import com.example.api_account.response.Message;


public interface LoginService {
    String login(Account account);
    Message loginMessage(LoginDto loginDto);

}
