package com.internship.tool.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;

import java.util.List;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http)
            throws Exception {

        http
                .csrf(csrf -> csrf.disable())

                .cors(cors -> cors.configurationSource(request -> {

                    CorsConfiguration config =
                            new CorsConfiguration();

                    config.setAllowedOrigins(
                            List.of("http://localhost:5173")
                    );

                    config.setAllowedMethods(
                            List.of("*")
                    );

                    config.setAllowedHeaders(
                            List.of("*")
                    );

                    return config;
                }))

                .authorizeHttpRequests(auth -> auth

                        .requestMatchers("/auth/**")
                        .permitAll()

                        .requestMatchers(HttpMethod.GET,
                                "/all",
                                "/all/**",
                                "/api/all",
                                "/api/all/**")
                        .permitAll()

                        .anyRequest()
                        .permitAll()
                );

        return http.build();
    }
}