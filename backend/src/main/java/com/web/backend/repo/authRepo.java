package com.web.backend.repo;

import com.web.backend.model.auth;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface authRepo extends JpaRepository<auth, Long> {
    List<auth> findAll();
}
