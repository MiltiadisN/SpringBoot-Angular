package com.example.backend.service;
import com.example.backend.entity.Task;

import java.util.List;

public interface TaskService {

    // Retrieve a list of all tasks
    List<Task> getAllTasks();

    // Retrieve a task by their ID
    Task getTaskById(Long id);

    // Create a new task
    Task createTask(Task task);

    // create task by employee id
    Task createTaskByEmployeeId(Task task, Long employeeId, Long managerId);

    // Update a task by their ID
    Task updateTask(Task task, Long id);

    // Delete a task by their ID
    void deleteTask(Long id);


    List<Task> getTasksByManagerId(Long managerId);
}
