package com.internship.tool.controller;

import com.internship.tool.entity.RiskRegister;
import com.internship.tool.repository.RiskRegisterRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
public class RiskRegisterController {

    @Autowired
    private RiskRegisterRepository riskRegisterRepository;

    @GetMapping("/all")
    public Page<RiskRegister> getAllRisks(

            @RequestParam(defaultValue = "0") int page,

            @RequestParam(defaultValue = "5") int size
    ) {

        return riskRegisterRepository.findAll(
                PageRequest.of(page, size)
        );
    }
}