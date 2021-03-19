package com.zemoso.ums.services;

import com.zemoso.ums.models.Comment;
import com.zemoso.ums.repositories.CommentRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements  CommentService{
    public final CommentRepository commentRepository;

    public CommentServiceImpl(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @Override
    public List<Comment> findAll() {
        return commentRepository.findAll();
    }

    @Override
    public Comment getOne(Long id) {
        return commentRepository.getOne(id);
    }

    @Override
    public Comment create(Comment comment) {
        return commentRepository.saveAndFlush(comment);
    }

    @Override
    public void deleteById(Long id){
        commentRepository.deleteById(id);
    }

    @Override
    public Comment update(Long id, Comment comment){
        Comment existingComment = commentRepository.getOne(id);
        BeanUtils.copyProperties(comment, existingComment, "comment_id");
        return commentRepository.saveAndFlush(existingComment);
    }


}
