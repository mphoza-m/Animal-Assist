package co.za.animalassist.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto implements Serializable {
    @JsonIgnore
    private Long user_id;
    private String firstname;
    private String lastname;
    private String email;
    private String phone_number;
    private Long role_id;
    private String password;
}
