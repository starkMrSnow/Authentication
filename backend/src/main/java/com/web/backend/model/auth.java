package com.web.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table( name = "user_details")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class auth {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   private String userName;
   private String email;
   private String passWord;

}