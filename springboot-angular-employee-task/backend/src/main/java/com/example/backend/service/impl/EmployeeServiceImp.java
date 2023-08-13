package com.example.backend.service.impl;

import com.example.backend.dao.EmployeeRepository;
import com.example.backend.entity.Employee;
import com.example.backend.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;

// This annotation marks this class as a service component that can be injected
@Service
public class EmployeeServiceImp implements EmployeeService {


    private EmployeeRepository employeeRepository;

    // Constructor injection
    public EmployeeServiceImp(EmployeeRepository employeeRepository){
        this.employeeRepository = employeeRepository;
    }

    // Implementation of the getAllEmployee method
    @Override
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

    // Implementation of the getEmployeeId method
    @Override
    public Employee getEmployeeId(Long id){
        return employeeRepository.findById(id).get();
    }

    // Implementation of the createEmployee method
    @Override
    public Employee createEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    // Implementation of the updateEmployee method
    @Override
    public Employee updateEmployee(Employee employee, Long id){
        Employee tempEmployee = employeeRepository.findById(id).get();
        tempEmployee.setFirstName(employee.getFirstName());
        tempEmployee.setLastName(employee.getLastName());
        tempEmployee.setEmail(employee.getEmail());
        tempEmployee.setGender(employee.getGender());
        return employeeRepository.save(tempEmployee);
    }

    // Implementation of the deleteEmployee method
    @Override
    public void deleteEmployee(Long id){
        employeeRepository.deleteById(id);
    }




}
