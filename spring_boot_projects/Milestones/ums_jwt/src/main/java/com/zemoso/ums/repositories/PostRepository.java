package com.zemoso.ums.repositories;

import com.zemoso.ums.models.Post;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {
}
