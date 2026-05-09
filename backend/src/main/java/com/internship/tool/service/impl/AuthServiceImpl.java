package com.internship.tool.service.impl;

import org.springframework.stereotype.Service;

import com.internship.tool.dto.AuthLoginRequest;
import com.internship.tool.dto.AuthRefreshRequest;
import com.internship.tool.dto.AuthRegisterRequest;
import com.internship.tool.dto.AuthResponse;
import com.internship.tool.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {

    @Override
    public AuthResponse register(AuthRegisterRequest request) {

        AuthResponse response = new AuthResponse();

        response.setTokenType("Bearer");
        response.setAccessToken("dummy-access-token");
        response.setRefreshToken("dummy-refresh-token");
        response.setExpiresIn(3600L);

        response.setEmail(request.getEmail());
        response.setFullName(request.getFullName());

        response.setRole("USER");

        return response;
    }

    @Override
public AuthResponse login(AuthLoginRequest request) {

    AuthResponse response = new AuthResponse();

    response.setTokenType("Bearer");
    response.setAccessToken("dummy-access-token");
    response.setRefreshToken("dummy-refresh-token");
    response.setExpiresIn(3600L);

    response.setEmail(request.getEmail());
    response.setFullName("Demo User");

    response.setRole("USER");

    return response;
}

    @Override
    public AuthResponse refreshToken(AuthRefreshRequest request) {

        AuthResponse response = new AuthResponse();

        response.setTokenType("Bearer");
        response.setAccessToken("new-access-token");

        response.setRefreshToken(
                request.getRefreshToken()
        );

        response.setExpiresIn(3600L);

        response.setEmail("demo@mail.com");
        response.setFullName("Demo User");

        response.setRole("USER");

        return response;
    }
}