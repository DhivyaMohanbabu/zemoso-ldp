package com.zemoso.ums.services.graphql;

import com.zemoso.ums.repositories.PostRepository;
import com.zemoso.ums.services.graphql.dataFetchers.post.AllPostsDataFetcher;
import com.zemoso.ums.services.graphql.dataFetchers.post.PostDataFetcher;
import graphql.GraphQL;
import graphql.schema.GraphQLSchema;
import graphql.schema.idl.RuntimeWiring;
import graphql.schema.idl.SchemaGenerator;
import graphql.schema.idl.SchemaParser;
import graphql.schema.idl.TypeDefinitionRegistry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;

@Service
public class GraphQLService {

    @Autowired
    PostRepository bookRepository;

    @Value("classpath:posts.graphql")
    Resource resource;

    private GraphQL graphQL;
    @Autowired
    private AllPostsDataFetcher allpostsDataFetcher;
    @Autowired
    private PostDataFetcher postDataFetcher;

    // load schema at application start up
    @PostConstruct
    private void loadSchema() throws IOException {
        // get the schema
        File schemaFile = resource.getFile();
        // parse schema
        TypeDefinitionRegistry typeRegistry = new SchemaParser().parse(schemaFile);
        RuntimeWiring wiring = buildRuntimeWiring();
        GraphQLSchema schema = new SchemaGenerator().makeExecutableSchema(typeRegistry, wiring);
        graphQL = GraphQL.newGraphQL(schema).build();
    }

    private RuntimeWiring buildRuntimeWiring() {
        return RuntimeWiring.newRuntimeWiring()
                .type("Query", typeWiring -> typeWiring
                        .dataFetcher("allPosts", allpostsDataFetcher)
                        .dataFetcher("post", postDataFetcher))
                .build();
    }

    public GraphQL getGraphQL() {
        return graphQL;
    }
}

