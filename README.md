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
  ![image](https://github.com/user-attachments/assets/6202d8d0-6768-464c-b7cf-362afee3727b)             
**3. Update Username, Password:** Make sure to update the database username and password to match your MySQL configuration.   
  ![image](https://github.com/user-attachments/assets/d700c6ca-166b-4c64-873c-157b25633d4a)                    
Just create the database, no need to worry about creating tables. When you run the application, Hibernate will automatically generate the required tables within the database.   
**4. Email Configuration:** Update application.properties for Email Configuration.
  ![image](https://github.com/user-attachments/assets/c9de2f7f-9ce5-44f9-919d-9c345c1335db)             
**5. JTW Secret Key and Expiration Time:** Update application.properties for Secret Key and Expiration Time.
  ![image](https://github.com/user-attachments/assets/178fd191-de8a-453c-83b1-de14c288fb51)      
        


# Features
  **1. Register:** Managers can register by providing their details. Upon registration, a unique verification code is sent to their email. This ensures only verified managers can access the system.                                          
  ![image](https://github.com/user-attachments/assets/efbcdd8e-349a-448c-82dc-dddec4b85705)                    
  **2. Verify Email:** After receiving the verification code via email, managers must enter it in the system to complete the registration process and activate their account.                                            
  ![image](https://github.com/user-attachments/assets/fa4bb49e-7523-4859-ab06-f690de80fcc1)                                  
  **3. Login:** Once registered and verified, managers can log in to the system using their credentials.                                   
  ![image](https://github.com/user-attachments/assets/c1c450f3-cdd6-4597-a245-30c60d6ed515)                                     
  **4. Manager** After logging in, managers can update their own profile details or delete their account if they choose to . They can also create, edit, assign, and delete employees and their task.                        
  ![image](https://github.com/user-attachments/assets/35347703-895f-4f16-bc40-47d76227e47a)                       
  **5. Manager Update Form:** Update manager details, including Username, E-mail, Password and City.                                       
  ![image](https://github.com/user-attachments/assets/f04e7b49-f3b3-4ce9-8a05-8cd35f7d9ba3)                       
  **6. Create Employee:** Create employee details, including Firstname, Lastname, E-mail and Gender.           
  ![image](https://github.com/user-attachments/assets/b06a740a-1ade-476b-9fde-5d3dce3775ee)                         
  ![image](https://github.com/user-attachments/assets/8b4b2d07-86ed-40b5-991f-ad0e1f471244)                               
  **7. Employee Update Form:** Update employee details, including Firstname, Lastname, E-mail and Gender.                  
  ![image](https://github.com/user-attachments/assets/eeba690e-d7bf-4640-914e-7b56dd7e648c)                                            
  ![image](https://github.com/user-attachments/assets/60658d31-23dd-4c59-86cb-3cb3f3e31af8)                           
  **8. Task Assignment:** Assign tasks to specific employees.                       
  ![image](https://github.com/user-attachments/assets/1106b1f4-643a-4b55-8b72-076b3a95e84b)                     
  ![image](https://github.com/user-attachments/assets/90f87a97-b30c-40a1-a0cb-c1452af897e4)                                   
  **9.** See the list of tasks assigned to each employee.    
  ![image](https://github.com/user-attachments/assets/18856323-2624-453b-8b62-d3a98065eb76)          
  ![image](https://github.com/user-attachments/assets/bbaf91ed-702e-4e20-89ae-df28ec5d3459)         
  **10. Search, Pagination, Sorting:** Find employees by name using a search feature, view a limited number of records at a time and sort employee records based on first name, last name, email, and gender.          
  ![image](https://github.com/user-attachments/assets/27e27f58-bbb2-4b9a-83dc-4c4dad0c1e24)                     
  **11. Task Management:** Manage tasks with title, description, and expiration date.        
  ![image](https://github.com/user-attachments/assets/2968541b-06da-41cc-8168-9b215815108d)        
  **12. Task Update Form:** Update task details, including title, description, and expiration date.  
  ![image](https://github.com/user-attachments/assets/2d0639cc-bb2b-4e67-981e-3ee3a10b868a)    
     
  

  





