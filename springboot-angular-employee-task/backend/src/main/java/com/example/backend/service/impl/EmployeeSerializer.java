package com.example.backend.service.impl;

import com.example.backend.entity.Employee;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;

public class EmployeeSerializer  extends JsonSerializer<Employee> {

    @Override
    public void serialize(Employee employee, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeStartObject();
        jsonGenerator.writeStringField("firstName", employee.getFirstName());//Serialize name of the employee
        jsonGenerator.writeStringField("lastName", employee.getLastName());//Serialize gender of the employee
        jsonGenerator.writeStringField("gender", employee.getGender());//Serialize gender of the employee
        jsonGenerator.writeEndObject();
    }
}
