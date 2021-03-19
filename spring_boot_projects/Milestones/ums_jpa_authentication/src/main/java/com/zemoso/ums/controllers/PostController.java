package com.zemoso.ums.controllers;

import com.zemoso.ums.models.Post;
import com.zemoso.ums.services.PostService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/post")
public class PostController {
    private final PostService postService;

    public PostController(PostService postService){
        this.postService = postService;
    }

    @GetMapping
    public List<Post> list(){
        return postService.findAll();
    }

    @GetMapping
    @RequestMapping("/{id}")
    public Post get(@PathVariable Long id){
        return postService.getOne(id);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Post create(@RequestBody final Post post){
        return postService.create(post);
    }

    @RequestMapping(value="/{id}", method = RequestMethod.DELETE)
    public void delete(@PathVariable Long id){
        postService.deleteById(id);
    }

    @RequestMapping(value="/{id}", method=RequestMethod.PUT)
    public Post update(@PathVariable Long id, @RequestBody Post post){
        return postService.update(id, post);
    }
}
