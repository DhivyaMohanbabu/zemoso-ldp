package com.zemoso.ums.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommentDto {
    private Long commentId;
    private Long postId;
    private String content;
}
