package com.jamesye.starter.api.web;

import com.google.common.collect.Maps;
import org.springframework.web.bind.annotation.*;
import com.jamesye.starter.api.dto.Technology;

import java.util.Map;

@RestController
public class TechnologyController {

  private static final Map<String, Technology> TECHNOLOGIES = Maps.newHashMap();

  @GetMapping("/api/technologies/{technology}")
  public Technology getDetail(@PathVariable(value = "technology") String technology) {
    return TECHNOLOGIES.get(technology);
  }

  static {
    TECHNOLOGIES.put("vuejs", new Technology("Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable."));
    TECHNOLOGIES.put("spring-boot", new Technology("Spring Boot makes it easy to create stand-alone, production-grade Spring based Applications that you can \"just run\"."));
    TECHNOLOGIES.put("bootstrap", new Technology("Build responsive, mobile-first projects on the web with the world's most popular front-end component library."));
  }
}
