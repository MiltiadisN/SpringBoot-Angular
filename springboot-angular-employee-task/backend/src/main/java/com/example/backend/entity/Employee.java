package com.example.backend.entity;
import com.example.backend.service.jwt.ManagerSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


import java.util.List;


@Entity
@Table(name = "employees")
@Getter
@Setter
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employee_id")
    private Long id;

    @Column(name = "first_name", nullable = false)
    private String firstName;

    @Column(name = "last_name", nullable = false)
    private String lastName;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "gender", nullable = false)
    private String gender;


    @OneToMany(mappedBy = "employee", cascade = CascadeType.ALL)
    private List<Task> tasks;

    @ManyToOne
    @JoinColumn
    @JsonSerialize(using = ManagerSerializer.class) // Custom serializer for the Manager
    private Manager manager;

}
