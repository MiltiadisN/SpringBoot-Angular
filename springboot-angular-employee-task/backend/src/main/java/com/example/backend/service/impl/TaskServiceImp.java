package com.example.backend.service.impl;

import com.example.backend.dao.EmployeeRepository;
import com.example.backend.dao.ManagerRepository;
import com.example.backend.dao.TaskRepository;
import com.example.backend.entity.Employee;
import com.example.backend.entity.Manager;
import com.example.backend.entity.Task;
import com.example.backend.service.TaskService;
import org.springframework.stereotype.Service;

import java.util.List;

// This annotation marks this class as a service component that can be injected
@Service
public class TaskServiceImp implements TaskService {

    private final TaskRepository taskRepository;
    private final EmployeeRepository employeeRepository;
    private final ManagerRepository managerRepository;

    // Constructor dependency injection
    public TaskServiceImp(TaskRepository taskRepository, EmployeeRepository employeeRepository, ManagerRepository managerRepository){
        this.taskRepository = taskRepository;
        this.employeeRepository = employeeRepository;
        this.managerRepository = managerRepository;
    }

    // Implementation of the getAllTasks method
    @Override
    public List<Task> getAllTasks(){
        return taskRepository.findAll();
    }

    // Implementation of the getTaskById method
    @Override
    public Task getTaskById(Long id){
        return taskRepository.findById(id).orElse(null);
    }

    //create a new task
    @Override
    public Task createTask(Task task){
        return taskRepository.save(task);
    }


    // create task by employee id
    @Override
    public Task createTaskByEmployeeId(Task task, Long employeeId, Long managerId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
        Manager manager = managerRepository.findById(managerId)
                .orElseThrow(() -> new RuntimeException("Manager not found"));

        task.setEmployee(employee);
        task.setManager(manager); // Set the manager for the task
        return taskRepository.save(task);
    }

    //update Task
    @Override
    public Task updateTask(Task task, Long id){
        Task tempTask = taskRepository.findById(id).get();
        tempTask.setDate(task.getDate());
        tempTask.setTitle(task.getTitle());
        tempTask.setDescription(task.getDescription());
        return taskRepository.save(tempTask);
    }

    // Implementation of the deleteTask method
    @Override
    public void deleteTask(Long id){
        taskRepository.deleteById(id);
    }

    @Override
    public List<Task> getTasksByManagerId(Long managerId) {
        Manager manager = managerRepository.findById(managerId)
                .orElseThrow(() -> new RuntimeException("Manager not found"));

        return taskRepository.findByManager(manager);
    }

}
