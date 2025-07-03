# TaskManager-backend

## Description
A Spring Boot application for managing tasks, designed as the backend component for a full-stack Task Manager application.

## Motivation
This project serves as a key component of my IT Specialist in Application Development training, providing a practical platform to enhance my programming skills, particularly in backend development with Spring Boot, JPA, and REST APIs.

## Features
- API Endpoints for CRUD operations on tasks
- Database persistence using Spring Data JPA
- RESTful architecture

## Technologies
- Java (24.0.1)
- Spring Boot (3.5.3)
- Spring Data JPA
- Lombok
- MariaDB/MySQL
- Gradle

## API Endpoints
![image](https://github.com/user-attachments/assets/a43c5b35-669f-4513-846a-8340dfe9d608)
- `POST /api/tasks/addTask` (Create Task)
- `GET /api/tasks` (Get All Tasks)
- `GET /api/tasks/{id}` (Get Task by ID)
- `PUT /api/tasks/{id}` (Update Task)
- `DELETE /api/tasks/{id}` (Delete Task)

## Setup and Running the Application
### Prerequisites
- Java Development Kit (JDK) 24.0.1
- Gradle
- MariaDB/MySQL Server installed and running

### Database Setup
1. Connect to your MariaDB/MySQL server (e.g., using MySQL Workbench, DBeaver, or command line).
2. Create the database schema:
   ```sql
   CREATE DATABASE taskmanager_db;
