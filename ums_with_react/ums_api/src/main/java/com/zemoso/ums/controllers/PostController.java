package com.zemoso.ums.controllers;

import com.zemoso.ums.DTO.PostDto;
import com.zemoso.ums.DTO.UserDto;
import com.zemoso.ums.models.Post;
import com.zemoso.ums.models.User;
import com.zemoso.ums.services.PostService;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/post")
public class PostController {
    private final PostService postService;
    private ModelMapper modelMapper;

    Logger logger = LoggerFactory.getLogger(UserController.class);


    public PostController(PostService postService, ModelMapper modelMapper){
        this.postService = postService;
        this.modelMapper = modelMapper;
    }

    @GetMapping
    public List<Post> list(){
        return postService.findAll();
    }

    @RequestMapping(value="/getByTitle", method = RequestMethod.GET)
    public List<Post> findByTitle (@RequestParam("title") String searchKeyword){
        return postService.findByTitle(searchKeyword);
    }

    @GetMapping
    @RequestMapping("/{id}")
    public PostDto get(@PathVariable Long id){
        PostDto postDto = convertToDto(postService.getOne(id));
        logger.error("My logging test comment");
        return postDto;
    }

    private PostDto convertToDto(Post post) {
        PostDto postDto = modelMapper.map(post, PostDto.class);
        return postDto;
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
