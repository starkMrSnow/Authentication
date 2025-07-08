package com.web.backend.controller;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.web.backend.repo.authRepo;
import com.web.backend.BackendApplication;
import com.web.backend.dto.authDto;
import com.web.backend.model.auth;

@RestController
public class authController {

    private final BackendApplication backendApplication;
    
    @Autowired
    private authRepo authRepo;

    authController(BackendApplication backendApplication) {
        this.backendApplication = backendApplication;
    }

    @GetMapping("/details")
    public List<authDto> getAllDetails(){
        List<auth> authDetails = authRepo.findAll(); 
        
        return authDetails.stream().map(authDetail -> new authDto(
            authDetail.getId(),
            authDetail.getUserName(),
            authDetail.getEmail(),
            authDetail.getPassWord()
        )).collect(Collectors.toList());
    }
    
}
