package com.internship.tool.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {

    private String tokenType;

    private String accessToken;

    private String refreshToken;

    private Long expiresIn;

    private String email;

    private String fullName;

    private String role;
}