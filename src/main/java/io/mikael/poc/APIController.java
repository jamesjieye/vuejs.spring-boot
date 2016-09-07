package io.mikael.poc;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.OffsetDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;

@RestController
public class APIController {

    private AtomicLong counter = new AtomicLong();

    @RequestMapping("/api")
    public Map<String, String> apiHome() {
        Map<String, String> result = new HashMap<>();
        result.put("result", "api");
        return result;
    }

    @RequestMapping("/api/hello")
    public Map<String, String> hello() {
        Map<String, String> result = new HashMap<>();
        result.put("name", "World");
        result.put("counter",  Long.toString(counter.getAndIncrement()));
        result.put("timestamp", OffsetDateTime.now().toString());
        return result;
    }

}
