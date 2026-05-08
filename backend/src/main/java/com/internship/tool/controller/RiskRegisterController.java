package com.internship.tool.controller;

import com.internship.tool.dto.RiskRegisterRequest;
import com.internship.tool.dto.RiskRegisterResponse;
import com.internship.tool.service.RiskRegisterService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:5175")
@RestController
@RequestMapping("/risk-registers")
public class RiskRegisterController {

    private final RiskRegisterService riskRegisterService;

    public RiskRegisterController(RiskRegisterService riskRegisterService) {
        this.riskRegisterService = riskRegisterService;
    }

    @GetMapping("/all")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<Page<RiskRegisterResponse>> getAllRiskRegisters(
            @PageableDefault(size = 10, sort = "updatedAt")
            Pageable pageable
    ) {

        return ResponseEntity.ok(
                riskRegisterService.getAllRiskRegisters(pageable));
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('USER', 'ADMIN')")
    public ResponseEntity<RiskRegisterResponse> getRiskRegisterById(
            @PathVariable Long id) {

        return ResponseEntity.ok(
                riskRegisterService.getRiskRegisterById(id));
    }

    @PostMapping("/create")
//     @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<RiskRegisterResponse> createRiskRegister(
            @Valid @RequestBody RiskRegisterRequest request) {

        RiskRegisterResponse response =
                riskRegisterService.createRiskRegister(request);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(response);
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<RiskRegisterResponse> updateRiskRegister(
            @PathVariable Long id,
            @Valid @RequestBody RiskRegisterRequest request) {

        RiskRegisterResponse response =
                riskRegisterService.updateRiskRegister(id, request);

        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<String> deleteRiskRegister(
            @PathVariable Long id) {

        riskRegisterService.deleteRiskRegister(id);

        return ResponseEntity.ok(
                "Risk Register deleted successfully");
    }

    @GetMapping("/search")
@PreAuthorize("hasAnyRole('USER', 'ADMIN')")
public ResponseEntity<java.util.List<RiskRegisterResponse>>
searchRiskRegisters(@RequestParam String q) {

    return ResponseEntity.ok(
        riskRegisterService.searchRiskRegisters(q));
}
}