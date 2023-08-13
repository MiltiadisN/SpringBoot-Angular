package com.example.backend.entity;

import com.example.backend.service.impl.EmployeeSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import jakarta.persistence.*;
import lombok.Data;

import java.util.*;


@Entity
@Table(name = "tasks")
@Data
public class Task {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "task_id")
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "date")
    private Date date;


    @ManyToOne
    @JoinColumn
    @JsonSerialize(using = EmployeeSerializer.class) // Custom serializer for the Employee
    private Employee employee;





}
