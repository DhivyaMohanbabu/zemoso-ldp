package com.zemoso.ums.services;

import com.zemoso.ums.models.Comment;

import java.util.List;

public interface CommentService {
    public List<Comment> findAll();
    public Comment getOne(Long id);
    public Comment create(Comment comment);
    public void deleteById(Long id);
    public Comment update(Long id, Comment comment);
}

