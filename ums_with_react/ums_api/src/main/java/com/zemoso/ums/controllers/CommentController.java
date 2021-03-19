package com.zemoso.ums.controllers;

import com.zemoso.ums.DTO.CommentDto;
import com.zemoso.ums.models.Comment;
import com.zemoso.ums.services.CommentService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/comment")
public class CommentController {
    private final CommentService commentService;
    private final ModelMapper modelMapper;

    Logger logger = LoggerFactory.getLogger(UserController.class);

    public CommentController(CommentService commentService, ModelMapper modelMapper) {
        this.commentService = commentService;
        this.modelMapper = modelMapper;
    }

    @GetMapping
    public List<Comment> list(){
        return commentService.findAll();
    }

    /*@GetMapping
    @RequestMapping("{id}")
    public Comment get(@PathVariable Long id){
        return commentService.getOne(id);
    }*/

    @GetMapping
    @RequestMapping("/{id}")
    public CommentDto get(@PathVariable Long id){
        CommentDto commentDto = convertToDto(commentService.getOne(id));
        logger.error("My logging test comment");
        return commentDto;
    }

    private CommentDto convertToDto(Comment comment) {
        CommentDto commentDto = modelMapper.map(comment, CommentDto.class);
        return commentDto;
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

