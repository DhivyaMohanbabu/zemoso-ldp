package com.zemoso.ums.repositories;

import com.zemoso.ums.models.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long>{
}