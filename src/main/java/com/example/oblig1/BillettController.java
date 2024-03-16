package com.example.oblig1;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController {
    private final List<Billett> alleBilletter = new ArrayList<>();

    @PostMapping("/lagre")
    public ResponseEntity<String> lagreBillett(@RequestBody Billett innBillett) {
        alleBilletter.add(innBillett);
        return ResponseEntity.ok("Billett lagret");
    }

    @GetMapping("/hentAlle")
    public ResponseEntity<List<Billett>> hentAlle() {
        return ResponseEntity.ok(alleBilletter);
    }

    @GetMapping("/slettAlle")
    public ResponseEntity<Void> slettAlle() {
        alleBilletter.clear();
        return ResponseEntity.ok().build();
    }
}
