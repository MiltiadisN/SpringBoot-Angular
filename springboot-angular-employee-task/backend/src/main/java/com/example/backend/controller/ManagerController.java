package com.example.backend.controller;

import com.example.backend.dto.ManagerResponse;
import com.example.backend.entity.Manager;
import com.example.backend.service.jwt.ManagersManagementService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("api")
public class ManagerController {

    private final ManagersManagementService managersManagementService;

    public ManagerController(ManagersManagementService managersManagementService) {
        this.managersManagementService = managersManagementService;
    }

    @PostMapping("/auth/register")
    public ResponseEntity<ManagerResponse> register(@RequestBody ManagerResponse reg){
        return ResponseEntity.ok(managersManagementService.register(reg));
    }

    @PostMapping("/auth/verify/{code}")
    public ResponseEntity<String> verifyEmail(@PathVariable String code) { // Only accept the code
        return managersManagementService.verifyEmail(code);
    }

    @PostMapping("/auth/login")
    public ResponseEntity<ManagerResponse> login(@RequestBody ManagerResponse req){
        return ResponseEntity.ok(managersManagementService.login(req));
    }

    @GetMapping("/manager/get-managers/{managerId}")
    public ResponseEntity<ManagerResponse> getManagersById(@PathVariable Long managerId){
        return ResponseEntity.ok(managersManagementService.getManagersById(managerId));
    }

    @PutMapping("/manager/update/{managerId}")
    public ResponseEntity<ManagerResponse> updateManager(@PathVariable Long managerId, @RequestBody ManagerResponse updateRequest) {
        ManagerResponse response = managersManagementService.updateManager(managerId, updateRequest);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @DeleteMapping("/manager/delete/{managerId}")
    public ResponseEntity<ManagerResponse> deleteManager(@PathVariable Long managerId) {
        ManagerResponse response = managersManagementService.deleteManager(managerId);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @GetMapping("/auth/check-email")
    public ResponseEntity<Boolean> checkEmailExists(@RequestParam String email) {
        boolean exists = managersManagementService.emailExists(email);
        return ResponseEntity.ok(exists);
    }



}
