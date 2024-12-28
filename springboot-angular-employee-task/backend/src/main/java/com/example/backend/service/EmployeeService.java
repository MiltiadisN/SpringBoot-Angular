package com.example.backend.service;

import com.example.backend.entity.Employee;

import java.util.List;

public interface EmployeeService {

    // Retrieve a list of all employees
    List<Employee> getAllEmployees();

    // Retrieve an employee by their ID
    Employee getEmployeeId(Long id);

    // Create a new employee
    Employee createEmployee(Employee employee);

    // Update an employee by their ID
    Employee updateEmployee(Employee employee, Long id);

    // Delete an employee by their ID
    void deleteEmployee(Long id);

    List<Employee> getEmployeesByManagerId(Long id);

    Employee createEmployeeByManagerId(Employee employee, Long managerId);
}
