package com.jamesye.starter;

import com.jamesye.starter.web.listeners.StartupListener;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

  @Bean
  public StartupListener startupListener() {
    return new StartupListener();
  }

  public static void main(String[] args) {
    new SpringApplication(Application.class).run();
  }
}
