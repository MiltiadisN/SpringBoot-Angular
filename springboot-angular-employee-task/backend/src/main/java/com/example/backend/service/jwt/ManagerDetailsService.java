package com.example.backend.service.jwt;

import com.example.backend.dao.ManagerRepository;
import com.example.backend.entity.Manager;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class ManagerDetailsService implements UserDetailsService {

    private final ManagerRepository managerRepository;

    public ManagerDetailsService(ManagerRepository managerRepository){
        this.managerRepository = managerRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Manager manager = managerRepository.findByEmail(email)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email: " + email));

        // Check if the user's email is verified
        if (!manager.isVerified()) {
            throw new RuntimeException("Email not verified. Please verify your email to log in.");
        }

        return new org.springframework.security.core.userdetails.User(manager.getEmail(), manager.getPassword(), new ArrayList<>());
    }
}
