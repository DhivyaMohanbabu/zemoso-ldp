package com.zemoso.ums.repositories;

import com.zemoso.ums.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    //Optional<User> findByUserName(String userName);
}