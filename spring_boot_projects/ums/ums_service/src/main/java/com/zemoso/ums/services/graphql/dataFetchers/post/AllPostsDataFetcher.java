package com.zemoso.ums.services.graphql.dataFetchers.post;

import com.zemoso.ums.models.Post;
import com.zemoso.ums.repositories.PostRepository;
import graphql.schema.DataFetcher;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class AllPostsDataFetcher implements DataFetcher<List<Post>> {

    @Autowired
    PostRepository postRepository;

    @Override
    public List<Post> get(DataFetchingEnvironment dataFetchingEnvironment) {
        return postRepository.findAll();
    }
}

