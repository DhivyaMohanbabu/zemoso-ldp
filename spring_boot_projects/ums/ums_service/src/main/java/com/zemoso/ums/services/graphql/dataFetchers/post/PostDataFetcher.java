package com.zemoso.ums.services.graphql.dataFetchers.post;

import com.zemoso.ums.models.Post;
import com.zemoso.ums.repositories.PostRepository;
import graphql.schema.DataFetcher;
import graphql.schema.DataFetchingEnvironment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PostDataFetcher implements DataFetcher<Post> {

    @Autowired
    PostRepository postRepository;

    @Override
    public Post get(DataFetchingEnvironment dataFetchingEnvironment) {

        Long id = dataFetchingEnvironment.getArgument("id");

        return postRepository.findById(id).get();
    }
}

