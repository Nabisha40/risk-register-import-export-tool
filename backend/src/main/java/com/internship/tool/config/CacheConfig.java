package com.internship.tool.config;

import org.springframework.context.annotation.Configuration;

@Configuration
public class CacheConfig {

    public static final String RISK_REGISTER_BY_ID_CACHE =
            "riskRegisterByIdCache";

    public static final String RISK_REGISTER_PAGE_CACHE =
            "riskRegisterPageCache";
}