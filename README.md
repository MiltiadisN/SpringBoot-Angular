# SpringBoot-Angular   
# Description   
This project demonstrates how to integrate Spring Boot and Angular, creating an Employee Task System. This project has implemented all the CRUD operations (Create, Read, Update, Delete) for employees and their associated tasks. It incorporates JWT-based authentication, Spring Security, and email verification for secure manager registration. The UI is build with Angular Material.   

# Technologies Used  
- SpringBoot  (version: 3.1.1)
- Spring Security
- JWT (JSON Web Tokens)
- Spring Boot Mail
- Hibernate  
- MySQL  
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
**4. Email Configuration:** Update application.properties for Email Configuration.
  ![image](https://github.com/user-attachments/assets/53d828ef-5343-43b7-9b43-ad1203a802fd)
**5. JTW Secret Key and Expiration Time:** Update application.properties for Secret Key and Expiration Time.
  ![image](https://github.com/user-attachments/assets/e0367848-a534-4a80-9a9e-47381edd03b9)


  

# Features
  **1. Register:** Managers can register by providing their details. Upon registration, a unique verification code is sent to their email. This ensures only verified managers can access the system.                                          
  ![image](https://github.com/user-attachments/assets/a7179021-6f58-46fd-9680-adb60d7d53bf)       
  **2. Verify Email:** After receiving the verification code via email, managers must enter it in the system to complete the registration process and activate their account.                                            
  ![image](https://github.com/user-attachments/assets/8d48bda6-d952-4e02-b91b-3e9b85093bd9)                   
  **3. Login:** Once registered and verified, managers can log in to the system using their credentials.                                   
  ![image](https://github.com/user-attachments/assets/0e318507-6568-4357-9e5b-2c4d82acd56d)                       
  **4. Manager** After logging in, managers can update their own profile details or delete their account if they choose to . They can also create, edit, assign, and delete employees and their task.                        
  ![image](https://github.com/user-attachments/assets/4799eebf-2fba-4ce4-9fc5-473a6bc4c58d)         
  **5. Manager Update Form:** Update manager details, including Username, E-mail, Password and City.                                       
  ![image](https://github.com/user-attachments/assets/90c4c42c-f3b4-4d7d-9492-535093af0997)         
  **6. Create Employee:** Create employee details, including Firstname, Lastname, E-mail and Gender.           
  ![image](https://github.com/MiltiadisN/test/assets/103901423/f60f7bdd-2fef-4f7e-b9b2-8b456e0f3823)            
  ![image](https://github.com/MiltiadisN/test/assets/103901423/84050f5b-b9a2-4b38-93bf-b601b94ab5f7)                
  **7. Employee Update Form:** Update employee details, including Firstname, Lastname, E-mail and Gender.                  
  ![image](https://github.com/MiltiadisN/test/assets/103901423/6a5fd6fa-95ce-475c-9e4d-153848d99063)                                
  ![image](https://github.com/MiltiadisN/test/assets/103901423/a5231901-41bb-4063-943d-564ece30edda)                      
  **8. Task Assignment:** Assign tasks to specific employees.                       
  ![image](https://github.com/MiltiadisN/test/assets/103901423/c5b7516d-8f83-4907-baea-efc8efc50ee5)                      
  ![image](https://github.com/MiltiadisN/test/assets/103901423/26396ff7-9596-485b-bf06-3e39c9ff0084)                          
  **9.** See the list of tasks assigned to each employee.    
  ![image](https://github.com/MiltiadisN/test/assets/103901423/6b2f068b-49c1-48a8-a636-b2731821e14b)     
  ![image](https://github.com/MiltiadisN/test/assets/103901423/183fa4cc-9be3-4ff0-bda7-60303d1f0df5)      
  **10. Search, Pagination, Sorting:** Find employees by name using a search feature, view a limited number of records at a time and sort employee records based on first name, last name, email, and gender.          
  ![image](https://github.com/MiltiadisN/test/assets/103901423/0b435eca-3a3b-48a7-b98a-1e396c190c69)     
  **11. Task Management:** Manage tasks with title, description, and expiration date.        
  ![image](https://github.com/MiltiadisN/SpringBoot-Angular/assets/103901423/9da3187e-98ce-41ce-a32a-395392c15f1f)   
  **12. Task Update Form:** Update task details, including title, description, and expiration date.  
  ![image](https://github.com/MiltiadisN/test/assets/103901423/615d7e1a-59a0-4e4d-8bdf-00fb6197c2e9)  

  





