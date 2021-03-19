package com.zemoso.ums.DTO;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class PostDto {
    private Long postId;
    private String title;
    private String content;
    private Long userId ;
}
