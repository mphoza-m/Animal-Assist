package co.za.animalassist.mapper;

import co.za.animalassist.dto.UserDto;
import co.za.animalassist.model.User;

public class UserMapper {

    public static UserDto mapUserToUserDto(User user){
        return new UserDto(user.getUser_id(),
                user.getFirstname(),
                user.getLastname(),
                user.getEmail(), user.getPhone_number(),
                user.getRole_id(),
                user.getPassword());
    }
    public static User mapUserDtoToUser(UserDto user){
        return new User(user.getUser_id(),
                user.getFirstname(),
                user.getLastname(),
                user.getEmail(), user.getPhone_number(),
                user.getRole_id(),
                user.getPassword());
    }
}
