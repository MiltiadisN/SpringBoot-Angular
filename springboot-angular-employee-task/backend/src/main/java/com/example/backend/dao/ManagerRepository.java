package com.example.backend.dao;

import com.example.backend.entity.Manager;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ManagerRepository extends JpaRepository<Manager, Long> {

    Optional<Manager> findByVerificationCode(String verificationCode);
    Optional<Manager> findByEmail(String email);
    boolean existsByEmail(String email);

}
