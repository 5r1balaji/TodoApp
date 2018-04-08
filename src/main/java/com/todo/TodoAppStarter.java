package com.todo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(value = "com.todo")
public class TodoAppStarter {
    public static void main(String[] args) {
        SpringApplication.run(TodoAppStarter.class,args);
    }
}
