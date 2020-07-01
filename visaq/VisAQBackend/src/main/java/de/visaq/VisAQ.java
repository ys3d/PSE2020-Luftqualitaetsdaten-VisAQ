package de.visaq;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Provides the entry point to the Spring backend.
 */
@SpringBootApplication
public class VisAQ {

    /**
     * Spring application entry point.
     * 
     * @param args An array of arguments passed to the Spring Application on startup
     */
    public static void main(String[] args) {
        SpringApplication.run(VisAQ.class, args);
    }

}
