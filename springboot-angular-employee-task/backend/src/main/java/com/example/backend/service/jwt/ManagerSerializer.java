package com.example.backend.service.jwt;

import com.example.backend.entity.Manager;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;

public class ManagerSerializer extends JsonSerializer<Manager> {

    @Override
    public void serialize(Manager manager, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
        jsonGenerator.writeStartObject();
        jsonGenerator.writeStringField("id",manager.getId().toString());
        jsonGenerator.writeStringField("Name", manager.getName());
        jsonGenerator.writeStringField("Email", manager.getEmail());
        jsonGenerator.writeStringField("Username", manager.getUsername());
        jsonGenerator.writeStringField("City", manager.getCity());
        jsonGenerator.writeStringField("Code", manager.getVerificationCode());
        jsonGenerator.writeEndObject();
    }

}
