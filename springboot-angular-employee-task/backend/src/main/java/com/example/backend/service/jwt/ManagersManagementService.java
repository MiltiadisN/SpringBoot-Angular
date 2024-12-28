package com.example.backend.service.jwt;

import com.example.backend.dao.ManagerRepository;
import com.example.backend.dto.ManagerResponse;
import com.example.backend.entity.Manager;
import com.example.backend.service.email.EmailService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.HashMap;
import java.util.Optional;
import java.util.UUID;

@Service
public class ManagersManagementService {

    private final ManagerRepository managerRepository;
    private final JWTUtils jwtUtils;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private static final Logger logger = LoggerFactory.getLogger(ManagersManagementService.class);
    private final EmailService emailService; // Declare the EmailService



    public ManagersManagementService(ManagerRepository adminRepository,
                                     JWTUtils jwtUtils,
                                     AuthenticationManager authenticationManager,
                                     PasswordEncoder passwordEncoder,
                                     EmailService emailService) {
        this.managerRepository = adminRepository;
        this.jwtUtils = jwtUtils;
        this.authenticationManager = authenticationManager;
        this.passwordEncoder = passwordEncoder;
        this.emailService = emailService;
    }


    public void sendVerificationEmail(String email, String verificationCode) {
        String subject = "Email Verification";
        String message = "Please verify your email using this code: " + verificationCode;
        emailService.sendEmail(email, subject, message);
    }

    public ManagerResponse register(ManagerResponse registrationRequest) {
        ManagerResponse resp = new ManagerResponse();

        try {
            Manager manager = new Manager();
            manager.setEmail(registrationRequest.getEmail());
            manager.setName(registrationRequest.getName());
            manager.setCity(registrationRequest.getCity());
            manager.setRole("MANAGER");
            manager.setPassword(passwordEncoder.encode(registrationRequest.getPassword()));


            // Generate a random verification code
            String verificationCode = UUID.randomUUID().toString();
            manager.setVerificationCode(verificationCode);
            manager.setVerified(false);

            sendVerificationEmail(manager.getEmail(), verificationCode);
            managerRepository.save(manager); // Save the manager only once

            resp.setOurManagers(manager);
            resp.setMessage("Manager  Saved Successfully. Please check your email to verify.");
            resp.setStatusCode(200);
        } catch (Exception e) {
            resp.setStatusCode(500);
            resp.setError(e.getMessage());
        }
        return resp;
    }

    public ResponseEntity<String> verifyEmail(String code) {
        // Find the manager by the verification code
        Optional<Manager> optionalManager = managerRepository.findByVerificationCode(code);


        // Check if the manager is present
        if (optionalManager.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Verification failed. Please try again.");
        }

        // Update the manager's verified status
        Manager manager = optionalManager.get();
        if (manager.getVerificationCode().equals(code)){
            manager.setVerified(true);
            //manager.setVerificationCode(null); // Clear the code after successful verification
            managerRepository.save(manager);
        }

        return ResponseEntity.ok("Email verified successfully!");
    }


    public ManagerResponse login(ManagerResponse loginRequest){
        ManagerResponse response = new ManagerResponse();
        try {
            authenticationManager
                    .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(),
                            loginRequest.getPassword()));
            var manager = managerRepository.findByEmail(loginRequest.getEmail()).orElseThrow();
            if (!manager.isVerified()) {
                throw new RuntimeException("Email not verified.");
            }
            var jwt = jwtUtils.generateToken(manager);
            var refreshToken = jwtUtils.generateRefreshToken(new HashMap<>(), manager);
            response.setStatusCode(200);
            response.setToken(jwt);
            response.setRefreshToken(refreshToken);
            response.setManagerId(manager.getId());
            response.setExpirationTime("24Hrs");
            response.setMessage("Successfully Logged In");

        }catch (Exception e){
            response.setStatusCode(500);
            response.setMessage(e.getMessage());
        }
        return response;
    }


    public ManagerResponse getManagersById(Long id) {
        ManagerResponse reqRes = new ManagerResponse();
        try {
            Manager managersById = managerRepository.findById(id).orElseThrow(() -> new RuntimeException("Manager Not found"));
            reqRes.setOurManagers(managersById);
            reqRes.setStatusCode(200);
            reqRes.setMessage("Managers with id '" + id + "' found successfully");
        } catch (Exception e) {
            reqRes.setStatusCode(500);
            reqRes.setMessage("Error occurred: " + e.getMessage());
        }
        return reqRes;
    }


    public ManagerResponse updateManager(Long managerId, ManagerResponse updateRequest) {
        ManagerResponse response = new ManagerResponse();

        try {
            Optional<Manager> existingManagerOpt = managerRepository.findById(managerId);
            if (existingManagerOpt.isPresent()) {
                Manager existingManager = existingManagerOpt.get();
                existingManager.setEmail(updateRequest.getEmail());
                existingManager.setName(updateRequest.getName());
                existingManager.setCity(updateRequest.getCity());
                if (updateRequest.getPassword() != null && !updateRequest.getPassword().isEmpty()) {
                    if (!passwordEncoder.matches(updateRequest.getPassword(), existingManager.getPassword())) {
                        existingManager.setPassword(passwordEncoder.encode(updateRequest.getPassword()));
                    }
                }

                managerRepository.save(existingManager);
                response.setOurManagers(existingManager);
                response.setStatusCode(200);
                response.setMessage("Manager updated successfully");
            } else {
                response.setStatusCode(404); // Not Found
                response.setMessage("Manager not found");
            }
        } catch (Exception e) {
            logger.error("Error occurred while updating manager: {}", e.getMessage(), e);
            response.setStatusCode(500);
            response.setMessage("Error occurred: " + e.getMessage());
        }

        return response;
    }

    public ManagerResponse deleteManager(Long managerId) {
        ManagerResponse response = new ManagerResponse();

        try {
            if (managerRepository.existsById(managerId)) {
                managerRepository.deleteById(managerId);
                response.setStatusCode(204); // No Content
                response.setMessage("Manager deleted successfully");
            } else {
                response.setStatusCode(404); // Not Found
                response.setMessage("Manager not found");
            }
        } catch (Exception e) {
            response.setStatusCode(500);
            response.setMessage("Error occurred: " + e.getMessage());
        }

        return response;
    }

    public boolean emailExists(String email) {
        return managerRepository.existsByEmail(email);
    }




}
