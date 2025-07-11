package com.example.taskmanager.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GenerationType;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Task {

    // Generation-Types description
    /* >>> AUTO
    /*     Indicates that the persistence provider should pick an appropriate strategy for the particular database.
    /* >>> IDENTITY
    /*     Indicates that the persistence provider must assign primary keys for the entity using a database identity column.
    /* >>> SEQUENCE
    /*     Indicates that the persistence provider must assign primary keys for the entity using a database sequence.
    /* >>> TABLE
    /*     Indicates that the persistence provider must assign primary keys for the entity using an underlying database table to ensure uniqueness.
    */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String category;
    private LocalDateTime createdAt;
    private LocalDateTime deadline;
    private String priority;
    private String status;
}