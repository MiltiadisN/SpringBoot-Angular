package com.example.backend.dao;

import com.example.backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {

    List<Employee> findByManagerId(Long managerId);
}
