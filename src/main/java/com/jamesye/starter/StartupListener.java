package com.jamesye.starter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import javax.servlet.ServletContext;
import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

/**
 * Startup listener for initializing additional context during app startup.
 * It will run after Spring Container finishes initialization.
 */
public class StartupListener implements ServletContextListener {

  @Override
  public void contextInitialized(ServletContextEvent event) {
    ServletContext context = event.getServletContext();
    applicationContext = WebApplicationContextUtils.getRequiredWebApplicationContext(context);
    log.info("Additional context initialized.");
  }

  @Override
  public void contextDestroyed(ServletContextEvent servletContextEvent) {
    log.info("Destroying additional context.");
  }

  private ApplicationContext applicationContext;

  private static final Logger log = LoggerFactory.getLogger(StartupListener.class);
}
