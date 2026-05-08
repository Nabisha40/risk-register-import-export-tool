package com.internship.tool.repository;

import com.internship.tool.entity.RiskRegister;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RiskRegisterRepository
        extends JpaRepository<RiskRegister, Long> {

    Optional<RiskRegister> findByRiskCode(String riskCode);

    List<RiskRegister> findByStatusIgnoreCase(String status);

    Page<RiskRegister> findByTitleContainingIgnoreCase(
            String title,
            Pageable pageable);

    @Query("""
        SELECT r FROM RiskRegister r
        WHERE LOWER(r.title) LIKE LOWER(CONCAT('%', :keyword, '%'))
        OR LOWER(r.description) LIKE LOWER(CONCAT('%', :keyword, '%'))
    """)
    List<RiskRegister> searchByKeyword(
            @Param("keyword") String keyword);

    List<RiskRegister>
    findByTargetResolutionDateBetweenAndActiveTrue(
            LocalDate startDate,
            LocalDate endDate);

    List<RiskRegister>
    findByTargetResolutionDateAndActiveTrue(
            LocalDate targetDate);
            List<RiskRegister>
findByCategoryIgnoreCaseAndActiveTrue(
        String category);

List<RiskRegister>
findByOwnerEmailIgnoreCase(
        String ownerEmail);

List<RiskRegister>
findByTargetResolutionDateBeforeAndActiveTrue(
        LocalDate targetDate);

@Query("""
    SELECT COUNT(r)
    FROM RiskRegister r
    WHERE LOWER(r.status) = LOWER(:status)
""")
long countByStatusCustom(
        @Param("status") String status);
}