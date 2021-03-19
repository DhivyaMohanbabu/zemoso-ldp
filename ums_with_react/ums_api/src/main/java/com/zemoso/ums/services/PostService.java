package com.zemoso.ums.services;

import com.zemoso.ums.models.Post;

import java.util.List;

public interface PostService {
    public List<Post> findAll();
    public List<Post> findByTitle(String searchKeyword);
    public Post getOne(Long id);
    public Post create(Post post);
    public void deleteById(Long id);
    public Post update(Long id, Post post);
}
