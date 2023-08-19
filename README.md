# SpringBoot-Angular   
# Description   
This project demonstrates how to integrate Spring Boot and Angular, creating an Employee Task System. This project has implemented all the CRUD operations (Create, Read, Update, Delete) for    employees and their associated tasks.The UI is build with Angular Material.   

# Technologies Used  
- SpringBoot  (version: 3.1.1)  
- MySQL  
- Hibernate  
- Angular (version: 16.0.5)  
- Angular Material UI  
  
# Installation        
- Clone or download the project files.      
- Backend:  
  - Install the dependencies by running the following command in the project directory: **mvn install**   
  - Run the project: **mvn spring-boot:run**  
- Frontend:   
  - Install the dependencies by running the following command in the project directory: **npm install**    
  - Run the project: **ng serve**  

# Configuration
**1. Create a Database:** Open MySQL Workbench and create a new database. You can use any name you prefer it doesn't have to be named "employee_task_v1" like in my example.    
**2. Update application.properties:** If you chose a different database name, make sure to update the database name in the property file. Look at the image below, where the database name is       highlighted.                
  ![image](https://github.com/MiltiadisN/test/assets/103901423/959cd517-8fdb-4037-9b20-95c76350841a)     
**3. Update Username, Password:** Make sure to update the database username and password to match your MySQL configuration.   
  ![image](https://github.com/MiltiadisN/test/assets/103901423/85abad19-ce92-4bd7-a17d-36ca966bddad)    
Just create the database, no need to worry about creating tables. When you run the application, Hibernate will automatically generate the required tables within the "employee_task_v1" database.   

# Features      
  **1. Create Employee:** Create employee details, including Firstname, Lastname, E-mail and Gender.  
  ![image](https://github.com/MiltiadisN/test/assets/103901423/f60f7bdd-2fef-4f7e-b9b2-8b456e0f3823)  
  ![image](https://github.com/MiltiadisN/test/assets/103901423/84050f5b-b9a2-4b38-93bf-b601b94ab5f7)    
  **2. Employee Update Form:** Update employee details, including Firstname, Lastname, E-mail and Gender.    
  ![image](https://github.com/MiltiadisN/test/assets/103901423/6a5fd6fa-95ce-475c-9e4d-153848d99063)  
  ![image](https://github.com/MiltiadisN/test/assets/103901423/a5231901-41bb-4063-943d-564ece30edda)          
  **3. Task Assignment:** Assign tasks to specific employees.    
  ![image](https://github.com/MiltiadisN/test/assets/103901423/c5b7516d-8f83-4907-baea-efc8efc50ee5)  
  ![image](https://github.com/MiltiadisN/test/assets/103901423/26396ff7-9596-485b-bf06-3e39c9ff0084)       
  **4.** See the list of tasks assigned to each employee.    
  ![image](https://github.com/MiltiadisN/test/assets/103901423/6b2f068b-49c1-48a8-a636-b2731821e14b)     
  ![image](https://github.com/MiltiadisN/test/assets/103901423/183fa4cc-9be3-4ff0-bda7-60303d1f0df5)      
  **5. Search, Pagination, Sorting:** Find employees by name using a search feature, view a limited number of records at a time and sort employee records based on first name, last name, email, and gender.          
  ![image](https://github.com/MiltiadisN/test/assets/103901423/0b435eca-3a3b-48a7-b98a-1e396c190c69)     
  **6. Task Management:** Manage tasks with title, description, and expiration date.        
  ![image](https://github.com/MiltiadisN/SpringBoot-Angular/assets/103901423/9da3187e-98ce-41ce-a32a-395392c15f1f)   
  **7. Task Update Form:** Update task details, including title, description, and expiration date.  
  ![image](https://github.com/MiltiadisN/test/assets/103901423/615d7e1a-59a0-4e4d-8bdf-00fb6197c2e9)  

  





