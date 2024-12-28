package com.example.backend.controller;

import com.example.backend.entity.Employee;
import com.example.backend.service.EmployeeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/api-employee")
public class EmployeeController {

    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    // Endpoint to retrieve a list of all employees
    @GetMapping("/employees")
    public List<Employee> getEmployee(){
        return employeeService.getAllEmployees();
    }

    // Endpoint to retrieve a specific employee by its ID
    @GetMapping("/employee/{employeeId}")
    public Employee getEmployeeById(@PathVariable("employeeId") Long employeeId){
        return employeeService.getEmployeeId(employeeId);
    }

    // Endpoint to create a new employee
    /*@PostMapping("/create-employee")
    public Employee createEmployee(@RequestBody Employee employee){
        return employeeService.createEmployee(employee);
    }*/

    @PostMapping("/create-employee/{managerId}")
    public Employee createEmployeeByManagerId(@RequestBody Employee employee, @PathVariable Long managerId) {
        return employeeService.createEmployeeByManagerId(employee, managerId);
    }


    // Endpoint to update a specific employee by its ID
    @PutMapping("/update/employee/{employeeId}")
    public Employee updateEmployeeById(@RequestBody Employee employee, @PathVariable("employeeId") Long employeeId){
        return employeeService.updateEmployee(employee,employeeId);
    }

    // Endpoint to delete a specific employee by its ID
    @DeleteMapping("/delete/employee/{employeeId}")
    public void deleteEmployee(@PathVariable("employeeId") Long employeeId) {
        employeeService.deleteEmployee(employeeId);
    }

    @GetMapping("/manager/{id}")
    public ResponseEntity<List<Employee>> getEmployeesByManager(@PathVariable("id") Long managerId) {
        List<Employee> employees = employeeService.getEmployeesByManagerId(managerId);
        if (employees.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(employees);
    }

}
