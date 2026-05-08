package com.internship.tool.service.impl;

import org.springframework.stereotype.Service;

import com.internship.tool.dto.*;
import com.internship.tool.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {

    @Override
    public AuthResponse register(AuthRegisterRequest request) {
        return AuthResponse.builder()
                .tokenType("Bearer")
                .accessToken("dummy-access-token")
                .refreshToken("dummy-refresh-token")
                .expiresIn(3600)
                .email(request.getEmail())
                .fullName(request.getFullName())
                .role("USER")
                .build();
    }

    @Override
    public AuthResponse login(AuthLoginRequest request) {
        return AuthResponse.builder()
                .tokenType("Bearer")
                .accessToken("dummy-access-token")
                .refreshToken("dummy-refresh-token")
                .expiresIn(3600)
                .email(request.getEmail())
                .fullName("Demo User")
                .role("USER")
                .build();
    }

    @Override
    public AuthResponse refreshToken(AuthRefreshRequest request) {
        return AuthResponse.builder()
                .tokenType("Bearer")
                .accessToken("new-access-token")
                .refreshToken(request.getRefreshToken())
                .expiresIn(3600)
                .email("demo@mail.com")
                .fullName("Demo User")
                .role("USER")
                .build();
    }
}