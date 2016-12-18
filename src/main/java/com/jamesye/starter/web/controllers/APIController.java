package com.jamesye.starter.web.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * API Controller
 *
 * @author James Ye
 */
@RestController
public class APIController {

  @RequestMapping("/api")
  public Map<String, String> apiHome() {
    Map<String, String> result = new HashMap<>();
    result.put("result", "api");
    return result;
  }

}
