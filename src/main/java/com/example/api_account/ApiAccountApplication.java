package com.example.api_account;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class ApiAccountApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiAccountApplication.class, args);
    }

}
