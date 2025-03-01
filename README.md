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
**1. Create a Database:** Open MySQL Workbench and create a new database. You can use any name you prefer.      
**2. Update application.properties:** If you chose a database name, make sure to update the database name in the property file. Look at the image below, where the database name is       highlighted.                
  ![image](https://github.com/user-attachments/assets/a2e2c276-d17c-40cf-8bfd-34da6648aea5)        
**3. Update Username, Password:** Make sure to update the database username and password to match your MySQL configuration.   
  ![image](https://github.com/user-attachments/assets/b0df4aef-8600-4bbb-add6-27f2601817d3)            
Just create the database, no need to worry about creating tables. When you run the application, Hibernate will automatically generate the required tables within the database.   
**4. Email Configuration:** Update application.properties for Email Configuration.
  ![image](https://github.com/user-attachments/assets/0b6a6154-4e9b-4084-ad41-9cff156a0b6a)        
**5. JTW Secret Key and Expiration Time:** Update application.properties for Secret Key and Expiration Time.
  ![image](https://github.com/user-attachments/assets/54a5f655-41b8-42c1-842d-cc1ecdcee627)         


# Features
  **1. Register:** Managers can register by providing their details. Upon registration, a unique verification code is sent to their email. This ensures only verified managers can access the system.                                          
  ![image](https://github.com/user-attachments/assets/94b4c132-49fa-4d85-b5c5-720502b8b6f1)         
  **2. Verify Email:** After receiving the verification code via email, managers must enter it in the system to complete the registration process and activate their account.                                            
  ![image](https://github.com/user-attachments/assets/0cc6e17e-a5a3-4635-b9fa-af9e6c250989)                         
  **3. Login:** Once registered and verified, managers can log in to the system using their credentials.                                   
  ![image](https://github.com/user-attachments/assets/9b6d3c61-2f09-4031-9a20-03ad502b762f)                          
  **4. Manager** After logging in, managers can update their own profile details or delete their account if they choose to . They can also create, edit, assign, and delete employees and their task.                        
  ![image](https://github.com/user-attachments/assets/31af0978-6d33-4bc5-a7b5-38f7e1e0c100)              
  **5. Manager Update Form:** Update manager details, including Username, E-mail, Password and City.                                       
  ![image](https://github.com/user-attachments/assets/73e2dfed-fa1f-4b45-8afb-f8f040262016)              
  **6. Create Employee:** Create employee details, including Firstname, Lastname, E-mail and Gender.           
  ![image](https://github.com/user-attachments/assets/7e387e41-6ae7-4fa7-a3e5-be250d7d1a08)             
  ![image](https://github.com/user-attachments/assets/d593e434-be50-4622-bde6-51cf9f4c25c3)                     
  **7. Employee Update Form:** Update employee details, including Firstname, Lastname, E-mail and Gender.                  
  ![image](https://github.com/user-attachments/assets/7f2a3b01-0b49-44d4-a306-4ec39351a0da)                             
  ![image](https://github.com/user-attachments/assets/38956e8b-0e51-4889-bc11-8fd9328b91e3)                      
  **8. Task Assignment:** Assign tasks to specific employees.                       
  ![image](https://github.com/user-attachments/assets/d127d3fa-6a68-48b6-83ea-fed233b8dca8)          
  ![image](https://github.com/user-attachments/assets/41ebf9ae-5dd9-44c1-9926-4dcb7bfde5dd)                              
  **9.** See the list of tasks assigned to each employee.    
  ![image](https://github.com/user-attachments/assets/4ce3f281-5779-440f-8e43-fd373e1c2583)       
  ![image](https://github.com/user-attachments/assets/27030b59-48c4-4626-b940-903179e2600c)    
  **10. Search, Pagination, Sorting:** Find employees by name using a search feature, view a limited number of records at a time and sort employee records based on first name, last name, email, and gender.          
  ![image](https://github.com/user-attachments/assets/b1532cf6-5c7a-441b-b719-b2effedd8fc1)       
  **11. Task Management:** Manage tasks with title, description, and expiration date.        
  ![image](https://github.com/user-attachments/assets/186832bb-b68a-4b8f-8a7a-3b52bb2d33f5)       
  **12. Task Update Form:** Update task details, including title, description, and expiration date.  
  ![image](https://github.com/user-attachments/assets/8220bdbe-e7de-4869-a616-e59c93b4cfa8)     
  

  





