package com.example.backend.controller;

import com.example.backend.entity.Task;
import com.example.backend.service.TaskService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200/") // Enable Cross-Origin Resource Sharing (CORS) for the specified origin
@RestController //Marks this class as a RESTful controller
public class TaskController {

    private TaskService taskService;


    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    // Endpoint to retrieve a list of all tasks
    @GetMapping("/tasks")
    public List<Task> getTasks(){
        return taskService.getAllTasks();
    }

    // Endpoint to retrieve a specific task by its ID
    @GetMapping("/task/{taskId}")
    public Task getTaskById(@PathVariable("taskId") Long taskId){
        return taskService.getTaskById(taskId);
    }

    // Endpoint to create a new task
    @PostMapping("/create-task")
    public Task createTask(@RequestBody Task task){
            return taskService.createTask(task);
    }

    // Endpoint to create a new task associated with an employee
    @PostMapping("/task/{employeeId}/employee")
    public Task createTaskByEmployeeId(@RequestBody Task task, @PathVariable Long employeeId) {
        return taskService.createTaskByEmployeeId(task, employeeId);
    }

    // Endpoint to update a specific task by its ID
    @PutMapping("/update/task/{taskId}")
    public Task updateTaskByID(@RequestBody Task task, @PathVariable("taskId") Long taskId){
        return taskService.updateTask(task,taskId);
    }

    // Endpoint to delete a specific task by its ID
    @DeleteMapping("/delete/task/{taskId}")
    public void deleteTask(@PathVariable("taskId") Long taskId){
        taskService.deleteTask(taskId);
    }






}
