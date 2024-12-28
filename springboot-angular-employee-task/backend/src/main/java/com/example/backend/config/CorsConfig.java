package com.example.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer webMvcConfigurer(){
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**") // Allow all endpoints
                        .allowedOrigins("http://185.188.249.104", "http://localhost", "http://localhost:4200","http://185.188.249.104","http://185.188.249.104:4200",
                                "https://185.188.249.104:4200","http://employee-task.miltiadisntinos.com","https://employee-task.miltiadisntinos.com","https://www.employee-task.miltiadisntinos.com",
                                "https://185.188.249.104:443",
                                "https://185.188.249.104","https://localhost:4200","https://185.188.249.104","https://localhost","https://185.188.249.104/api")
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Allowed HTTP methods
                        .allowedHeaders("*") // Allow all headers
                        .allowCredentials(true); // If you need to send cookies or authentication headers
            }
        };
    }
}