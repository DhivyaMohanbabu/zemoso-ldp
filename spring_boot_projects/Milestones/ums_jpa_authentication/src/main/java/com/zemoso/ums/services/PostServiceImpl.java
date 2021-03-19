package com.zemoso.ums.services;

import com.zemoso.ums.models.Post;
import com.zemoso.ums.repositories.PostRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServiceImpl implements PostService{
    private final PostRepository postRepository;

    public PostServiceImpl(PostRepository postRepository){
        this.postRepository = postRepository;
    }

    @Override
    public List<Post> findAll() {
        return postRepository.findAll();
    }

    @Override
    public Post getOne(Long id) {
        return postRepository.getOne(id);
    }

    @Override
    public Post create(Post post) {
        return postRepository.saveAndFlush(post);
    }

    @Override
    public void deleteById(Long id){
        postRepository.deleteById(id);
    }

    @Override
    public Post update(Long id, Post post){
        Post existingPost = postRepository.getOne(id);
        BeanUtils.copyProperties(post, existingPost, "post_id");
        return postRepository.saveAndFlush(existingPost);
    }
}
