package com.web.backend.dto;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class authDto {
    private Long id;
    private String userName;
    private String email;
    private String passWord;
}
