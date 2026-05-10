package com.internship.tool.seeder;

import com.internship.tool.entity.RiskRegister;
import com.internship.tool.repository.RiskRegisterRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    private final RiskRegisterRepository repository;

    public DataSeeder(
            RiskRegisterRepository repository) {

        this.repository = repository;
    }

    @Override
    public void run(String... args) {

        if (repository.count() > 0) {
            return;
        }

        for (int i = 1; i <= 15; i++) {

            RiskRegister risk =
                    new RiskRegister();

            risk.setRiskCode(
                    "RISK-00" + i
            );

            risk.setTitle(
                    "Risk Title " + i
            );

            risk.setDescription(
                    "Demo Risk Description " + i
            );

            risk.setCategory(
                    "Infrastructure"
            );

            risk.setPriority(

                    i % 3 == 0
                            ? "HIGH"
                            : i % 2 == 0
                            ? "MEDIUM"
                            : "LOW"
            );

            risk.setStatus("OPEN");

            risk.setImpactLevel("HIGH");

            risk.setLikelihoodLevel(
                    "MEDIUM"
            );

            risk.setOwnerName(
                    "Admin"
            );

            risk.setOwnerEmail(
                    "admin@gmail.com"
            );

            risk.setMitigationPlan(
                    "Monitor continuously"
            );

            risk.setSourceSystem(
                    "Production"
            );

            risk.setActive(true);

            repository.save(risk);
        }

        System.out.println(
                "Demo data seeded successfully!"
        );
    }
}