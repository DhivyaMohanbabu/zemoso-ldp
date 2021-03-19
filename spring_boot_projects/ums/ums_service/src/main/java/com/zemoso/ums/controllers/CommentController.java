package com.zemoso.ums.controllers;

import com.zemoso.ums.models.Comment;
import com.zemoso.ums.services.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/comment")
public class CommentController {
    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping
    public List<Comment> list(){
        return commentService.findAll();
    }

    @GetMapping
    @RequestMapping("{id}")
    public Comment get(@PathVariable Long id){
        return commentService.getOne(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Comment create(@RequestBody final Comment comment){
        return commentService.create(comment);
    }

    @RequestMapping(value="{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id){
        commentService.deleteById(id);
    }

    @RequestMapping(value="{id}", method=RequestMethod.PUT)
    public Comment update(@PathVariable Long id, @RequestBody Comment comment){
        return commentService.update(id, comment);
    }
}

