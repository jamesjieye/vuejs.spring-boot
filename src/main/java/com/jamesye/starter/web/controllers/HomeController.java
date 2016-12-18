package com.jamesye.starter.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Home Controller
 *
 * @author James Ye
 */
@Controller
public class HomeController {

  @GetMapping("/**")
  public String home(Model model) {
    model.addAttribute("message", "Hello, Spring Boot!");
    return "index";
  }
}
